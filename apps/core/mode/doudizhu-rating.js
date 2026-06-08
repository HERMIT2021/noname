const DEFAULT_RATING = 5;
const MIN_RATING = 1;
const MAX_RATING = 10;

function normalizeRating(value) {
	const number = Number(value);
	if (!Number.isFinite(number)) {
		return DEFAULT_RATING;
	}
	return Math.max(MIN_RATING, Math.min(MAX_RATING, Math.round(number)));
}

export function normalizeDoudizhuRatings(rawRatings) {
	if (!rawRatings || typeof rawRatings != "object" || Array.isArray(rawRatings)) {
		return {};
	}
	const ratings = {};
	for (const name in rawRatings) {
		const raw = rawRatings[name];
		if (!raw || typeof raw != "object" || Array.isArray(raw)) {
			continue;
		}
		ratings[name] = {
			zhu: normalizeRating(raw.zhu),
			fan: normalizeRating(raw.fan),
		};
	}
	return ratings;
}

export function getDoudizhuRating(ratings, name, role) {
	const rating = ratings && ratings[name];
	if (!rating || typeof rating != "object") {
		return DEFAULT_RATING;
	}
	return normalizeRating(rating[role == "fan" ? "fan" : "zhu"]);
}

function isDoudizhuSelectableCharacter(info) {
	if (!info || typeof info != "object") {
		return false;
	}
	if (Array.isArray(info)) {
		return !Array.isArray(info[4]) || !info[4].includes("unseen");
	}
	return !info.isUnseen && !info.isHiddenBoss && !info.isMinskin;
}

export function getDoudizhuEnabledCharacters(characterPacks, enabledPacks, bannedCharacters) {
	if (!characterPacks || typeof characterPacks != "object") {
		return [];
	}
	const packList = Array.isArray(enabledPacks) && enabledPacks.length ? enabledPacks : Object.keys(characterPacks);
	const banned = new Set(Array.isArray(bannedCharacters) ? bannedCharacters : []);
	const added = new Set();
	const list = [];
	for (const packName of packList) {
		const pack = characterPacks[packName];
		if (!pack || typeof pack != "object") {
			continue;
		}
		for (const name in pack) {
			if (banned.has(name) || added.has(name)) {
				continue;
			}
			const info = pack[name];
			if (!isDoudizhuSelectableCharacter(info)) {
				continue;
			}
			added.add(name);
			list.push(name);
		}
	}
	return list;
}

export function sortDoudizhuCandidates(candidates, role, ratings, options = {}) {
	if (!Array.isArray(candidates)) {
		return [];
	}
	const list = candidates.slice();
	const targetScore = typeof options.targetScore == "number" ? options.targetScore : null;
	const minScore = targetScore == null ? MIN_RATING : Math.max(MIN_RATING, targetScore + (typeof options.minOffset == "number" ? options.minOffset : -2));
	const maxScore = targetScore == null ? MAX_RATING : Math.min(MAX_RATING, targetScore + (typeof options.maxOffset == "number" ? options.maxOffset : 1));

	list.sort((a, b) => {
		const scoreA = getDoudizhuRating(ratings, a, role);
		const scoreB = getDoudizhuRating(ratings, b, role);
		const zhuScoreA = getDoudizhuRating(ratings, a, "zhu");
		const zhuScoreB = getDoudizhuRating(ratings, b, "zhu");
		const fanScoreA = getDoudizhuRating(ratings, a, "fan");
		const fanScoreB = getDoudizhuRating(ratings, b, "fan");
		if (role == "fan" && targetScore != null) {
			const inRangeA = scoreA >= minScore && scoreA <= maxScore;
			const inRangeB = scoreB >= minScore && scoreB <= maxScore;
			if (inRangeA != inRangeB) {
				return inRangeA ? -1 : 1;
			}
			if (inRangeA && scoreA != scoreB) {
				return scoreB - scoreA;
			}
			const distanceA = Math.abs(scoreA - targetScore);
			const distanceB = Math.abs(scoreB - targetScore);
			if (distanceA != distanceB) {
				return distanceA - distanceB;
			}
		}
		if (scoreA != scoreB) {
			return scoreB - scoreA;
		}
		if (role == "zhu") {
			const zhuAdvantageA = zhuScoreA - fanScoreA;
			const zhuAdvantageB = zhuScoreB - fanScoreB;
			if (zhuAdvantageA != zhuAdvantageB) {
				return zhuAdvantageB - zhuAdvantageA;
			}
		}
		return String(a).localeCompare(String(b));
	});
	return list;
}

export function getDoudizhuScoreWindow(targetScore, options = {}) {
	if (typeof targetScore != "number") {
		return [MIN_RATING, MAX_RATING];
	}
	return [
		Math.max(MIN_RATING, targetScore + (typeof options.minOffset == "number" ? options.minOffset : -2)),
		Math.min(MAX_RATING, targetScore + (typeof options.maxOffset == "number" ? options.maxOffset : 1)),
	];
}
