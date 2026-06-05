//pcScale:pc端缩放不填默认就是scale的值 为了适配pc端的不然pc端人物太小
//只能两个骨骼 一个背景一个人物 不能切换骨骼 应该只能是手杀骨骼才行一般都是两个文件XingXiang BeiJing这种
//sznSrc填了默认src路径就是十周年UI/assets/dynamic下 为了节省空间
export let config = {
	貂蝉: {
		name: "貂蝉/XingXiang",
		x: [0, 0.4],
		y: [0, 0.6],
		scale: 0.44,
		pcscale: 0.8,
		beijing: {
			name: "貂蝉/BeiJing",
			x: [0, 0.5],
			y: [0, 0.3],
			scale: 1,
		},
	},
	戏志才: {
		name: "戏志才/XingXiang",
		x: [0, 0.4],
		y: [0, 0.6],
		scale: 0.44,
		pcscale: 0.8,
		beijing: {
			name: "戏志才/BeiJing",
			x: [0, 0.5],
			y: [0, 0.3],
			scale: 1.4,
			pcscale: 2,
		},
	},
	夏侯氏: {
		name: "夏侯氏/明良千古/XingXiang",
		x: [0, 0.4],
		y: [0, 0.6],
		scale: 0.44,
		pcscale: 0.8,
		beijing: {
			name: "夏侯氏/明良千古/BeiJing",
			x: [0, 0.5],
			y: [0, 0.5],
			scale: 1.4,
		},
	},
	// 戏志才: {
	//     sznSrc:true,
	// 	name: "戏志才/举棋若定/XingXiang",
	// 	x: [0, 0.4],
	// 	y: [0, 0.6],
	// 	scale: 0.44,
	// 	pcscale: 0.8,
	// 	beijing: {
	// 		name: "戏志才/举棋若定/BeiJing",
	// 		x: [0, 0.5],
	// 		y: [0, 0.3],
	// 		scale: 2,
	// 	},
	// },
	// 夏侯氏: {
	//     sznSrc:true,
	// 	name: "夏侯氏/明良千古/XingXiang",
	// 	x: [0, 0.4],
	// 	y: [0, 0.6],
	// 	scale: 0.44,
	// 	pcscale: 0.8,
	// 	beijing: {
	// 		name: "夏侯氏/明良千古/BeiJing",
	// 		x: [0, 0.5],
	// 		y: [0, 0.3],
	// 		scale: 2,
	// 	},
	// },
};
