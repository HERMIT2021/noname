const DEFAULT_RATING = 5;
const MIN_RATING = 1;
const MAX_RATING = 10;

function normalizeRating(value) {
	const number = Number(value);
	if (!Number.isFinite(number)) return DEFAULT_RATING;
	return Math.max(MIN_RATING, Math.min(MAX_RATING, Math.round(number)));
}

export function normalizeIdentityLordRatings(rawRatings) {
	if (!rawRatings || typeof rawRatings != "object" || Array.isArray(rawRatings)) return {};
	const ratings = {};
	for (const name in rawRatings) {
		ratings[name] = normalizeRating(typeof rawRatings[name] == "object" ? rawRatings[name]?.lord : rawRatings[name]);
	}
	return ratings;
}

export function getIdentityLordRating(ratings, name) {
	return normalizeRating(ratings && ratings[name]);
}

export function sortIdentityLordCandidates(candidates, ratings) {
	if (!Array.isArray(candidates)) return [];
	const list = candidates.slice();
	list.sort((a, b) => {
		const scoreA = getIdentityLordRating(ratings, a);
		const scoreB = getIdentityLordRating(ratings, b);
		if (scoreA != scoreB) return scoreB - scoreA;
		return String(a).localeCompare(String(b));
	});
	return list;
}

export function getDouzhuanIdentityLordPool(lib, mode = "identity") {
	const prefix = "extension_斗转星移_";
	const modePlan = lib?.config?.[prefix + "modePlan"] || {};
	const planIndex = Number.isFinite(parseInt(modePlan.identity_junzheng)) ? parseInt(modePlan.identity_junzheng) : Number.isFinite(parseInt(modePlan[mode])) && parseInt(modePlan[mode]) !== 0 ? parseInt(modePlan[mode]) : 1;
	const plan = lib?.config?.[prefix + "plan" + planIndex];
	if (!plan || !Array.isArray(plan.pack)) return null;
	const banned = Array.isArray(plan.banList) ? plan.banList : [];
	const result = [];
	const addCharacter = name => {
		if (!name || banned.includes(name) || !lib.character?.[name]) return;
		if (lib.character[name].isUnseen || lib.character[name].isAiForbidden) return;
		if (Array.isArray(lib.config?.forbidai) && lib.config.forbidai.includes(name)) return;
		if (lib.characterFilter?.[name] && !lib.characterFilter[name](mode)) return;
		result.add(name);
	};
	for (const pack of plan.pack) {
		const characterPack = pack == "all" ? lib.character : lib.characterPack?.[pack];
		if (!characterPack) continue;
		for (const name in characterPack) addCharacter(name);
	}
	return result;
}
