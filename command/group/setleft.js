module.exports = {
	name: "setleft",
	desc: "Change Text On Left",
	category: "group",
	use: "<text>",
	query: "enter text\n@subject : nama group\n@ownergc : Admin Gc\n@user : nama user\n@creation : Hari Dimana Group Dibuat\n@desc : deskripsi Gc",
	isAdmin: true,
	isSpam: true,
	async run({ msg, conn }, { q }) {
		let dataNeeded = db.cekDatabase("left", "id", msg.from);
		if (!dataNeeded) throw "Left QIYUMMY-MD BOTZ Di Group Ini Belum Diaktifkan\nKetik ${prefix}left 1 untuk menyalakan QIYUMMY-MD BOTZ,\nKetik ${prefix}left 0 untuk mematikan left QIYUMMY-MD BOTZ";
		let data = JSON.parse(require("fs").readFileSync("./database/left.json"));
		let da = data.find((a) => a.id == msg.from);
		da.teks = q;
		da.lastUpdate = Date.now();
		require("fs").writeFileSync("./database/left.json", JSON.stringify(data, null, 2));
		await msg.reply(
			"Left QIYUMMY-MD BOTZ Berhasil Diubah\n\n@user : Name\n@subject : Name Gc\n@desc : deskripsi"
		);
	},
};
