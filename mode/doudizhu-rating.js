const DEFAULT_RATING = 5;
const MIN_RATING = 1;
const MAX_RATING = 10;

function normalizeCount(value) {
	const number = Math.floor(Number(value));
	if (!Number.isFinite(number) || number < 0) {
		return 0;
	}
	return number;
}

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
		if (role == "zhu") {
			const zhuAdvantageA = zhuScoreA - fanScoreA;
			const zhuAdvantageB = zhuScoreB - fanScoreB;
			const zhuFitA = zhuScoreA * 2 + zhuAdvantageA;
			const zhuFitB = zhuScoreB * 2 + zhuAdvantageB;
			if (zhuFitA != zhuFitB) {
				return zhuFitB - zhuFitA;
			}
			if (zhuScoreA != zhuScoreB) {
				return zhuScoreB - zhuScoreA;
			}
			if (zhuAdvantageA != zhuAdvantageB) {
				return zhuAdvantageB - zhuAdvantageA;
			}
			return String(a).localeCompare(String(b));
		}
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

function normalizeWinrateLine(rawLine) {
	const raw = rawLine && typeof rawLine == "object" && !Array.isArray(rawLine) ? rawLine : {};
	let win = normalizeCount(raw.win ?? raw.wins ?? raw[0]);
	let lose = normalizeCount(raw.lose ?? raw.loss ?? raw.losses ?? raw[1]);
	let total = normalizeCount(raw.total ?? raw.count ?? raw.games);
	if (!total && (win || lose)) {
		total = win + lose;
	}
	if (total < win + lose) {
		total = win + lose;
	}
	if (total > win + lose) {
		lose = total - win;
	}
	return { total, win, lose };
}

function addWinrateLine(line, win) {
	line.total++;
	if (win) {
		line.win++;
	} else {
		line.lose++;
	}
}

export function getDoudizhuWinrate(line) {
	return line && line.total ? line.win / line.total : 0;
}

export function normalizeDoudizhuWinrateStats(rawStats) {
	if (!rawStats || typeof rawStats != "object" || Array.isArray(rawStats)) {
		return {};
	}
	const stats = {};
	for (const name in rawStats) {
		const raw = rawStats[name];
		if (!raw || typeof raw != "object" || Array.isArray(raw)) {
			continue;
		}
		const zhu = normalizeWinrateLine(raw.zhu);
		const fan = normalizeWinrateLine(raw.fan);
		let total = normalizeWinrateLine(raw);
		const roleTotal = {
			total: zhu.total + fan.total,
			win: zhu.win + fan.win,
			lose: zhu.lose + fan.lose,
		};
		if (roleTotal.total > total.total) {
			total = roleTotal;
		}
		if (!total.total && !zhu.total && !fan.total) {
			continue;
		}
		stats[name] = {
			total: total.total,
			win: total.win,
			lose: total.lose,
			zhu,
			fan,
		};
	}
	return stats;
}

export function recordDoudizhuWinrateStats(rawStats, characters, role, win) {
	const stats = normalizeDoudizhuWinrateStats(rawStats);
	if (!Array.isArray(characters) || typeof win != "boolean") {
		return stats;
	}
	const roleKey = role == "zhu" ? "zhu" : "fan";
	const added = new Set();
	for (const name of characters) {
		if (!name || typeof name != "string" || added.has(name)) {
			continue;
		}
		added.add(name);
		if (!stats[name]) {
			stats[name] = {
				total: 0,
				win: 0,
				lose: 0,
				zhu: { total: 0, win: 0, lose: 0 },
				fan: { total: 0, win: 0, lose: 0 },
			};
		}
		addWinrateLine(stats[name], win);
		addWinrateLine(stats[name][roleKey], win);
	}
	return stats;
}
