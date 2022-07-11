const getPosition = (name, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === name) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

module.exports = {
	name: "welcome",
	desc: "activate the new member welcome feature",
	use: "<1 / 0>",
	category: "group",
	query: "enter options\n1 = aktif\n0 = nonaktif",
	isAdmin: true,
	isSpam: true,
	async run({ msg, conn }, { args, prefix }) {
		let data = JSON.parse(require("fs").readFileSync("./database/welcome.json"));
		let data2 = db.cekDatabase("welcome", "id", msg.from);
		if (args[0] == 1) {
			if (data2) throw "been active before";
			db.modified("welcome", { id: msg.from, teks: "Hy Dek,\nWelcome to Group :\n@subject\n\nMASUK GROUP QIYUMMY-MD BOTZ :\n₲ⱤɄ₱ ฿Ø₮Ⱬ ꋬꇙꌦꋪꋬꊰ 6ꌦꄲ꒤꒤\nGROUP 1 :\nhttps://bit.ly/3ax9GjJ\nGROUP 2 :\nhttps://bit.ly/3yuGWAi\nGROUP 3 :\nhttps://bit.ly/3RlgwJQ", lastUpdate: false });
			await msg.reply(
				`Welcome QIYUMMY-MD BOTZ Berhasil Diaktifkan\n\nKetik ${prefix}setwelcome <teks> jika ingin Mengubah teks welcome QIYUMMY-MD BOTZ\nketik ${prefix}setleft jika ingin mengubah teks left QIYUMMY-MD Botz`
			);
		} else if (args[0] == 0) {
			if (!data2) throw "not active before";
			data.splice(getPosition(msg.from, data), 1);
			require("fs").writeFileSync("./database/welcome.json", JSON.stringify(data, null, 2));
			await msg.reply("successfully delete session welcome in this group");
		}
	},
};
