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
