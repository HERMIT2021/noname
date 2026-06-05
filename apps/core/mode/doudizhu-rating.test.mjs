import assert from "node:assert/strict";
import { getDoudizhuEnabledCharacters, getDoudizhuRating, normalizeDoudizhuRatings, sortDoudizhuCandidates } from "./doudizhu-rating.js";

const rawRatings = {
	shen_guojia: { zhu: 9, fan: 6 },
	re_guojia: { zhu: 8.6, fan: 4 },
	re_xusheng: { zhu: 11, fan: 10 },
	weak_farmer: { zhu: 2, fan: 2 },
	bad_data: { zhu: "abc", fan: -3 },
};
const ratings = normalizeDoudizhuRatings(rawRatings);

assert.deepEqual(ratings.shen_guojia, { zhu: 9, fan: 6 });
assert.deepEqual(ratings.re_guojia, { zhu: 9, fan: 4 });
assert.deepEqual(ratings.re_xusheng, { zhu: 10, fan: 10 });
assert.deepEqual(ratings.bad_data, { zhu: 5, fan: 1 });

assert.equal(getDoudizhuRating(ratings, "unknown_character", "zhu"), 5);
assert.equal(getDoudizhuRating(ratings, "shen_guojia", "zhu"), 9);
assert.equal(getDoudizhuRating(ratings, "shen_guojia", "fan"), 6);

assert.deepEqual(
	sortDoudizhuCandidates(["weak_farmer", "shen_guojia", "re_xusheng", "unknown_character"], "zhu", ratings),
	["re_xusheng", "shen_guojia", "unknown_character", "weak_farmer"]
);

assert.deepEqual(
	sortDoudizhuCandidates(["weak_farmer", "shen_guojia", "re_xusheng", "unknown_character"], "fan", ratings, { targetScore: 9 }),
	["re_xusheng", "shen_guojia", "unknown_character", "weak_farmer"]
);

assert.deepEqual(
	sortDoudizhuCandidates(["weak_farmer", "unknown_character"], "fan", ratings, { targetScore: 9 }),
	["unknown_character", "weak_farmer"]
);

assert.deepEqual(
	getDoudizhuEnabledCharacters(
		{
			standard: {
				caocao: ["male", "wei", 4, [], []],
				liubei: ["male", "shu", 4, [], []],
			},
			shenhua: {
				shen_guojia: ["male", "shen", 3, [], []],
				hidden_test: ["male", "shen", 3, [], ["unseen"]],
			},
			extra: {
				zombie_zombie: {
					sex: "male",
					group: "qun",
					hp: 2,
					skills: ["zombieshibian"],
					isUnseen: true,
				},
				ca_shen_caocao: {
					sex: "male",
					group: "shen",
					hp: 4,
					skills: ["cazhaoshao"],
				},
			},
		},
		["standard", "shenhua", "extra"],
		["liubei"]
	),
	["caocao", "shen_guojia", "ca_shen_caocao"]
);
