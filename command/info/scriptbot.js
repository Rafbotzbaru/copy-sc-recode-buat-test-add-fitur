module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Gausah di ubah kontol najis modal copas sana sini ubah source cih
				caption: `Script Bot Ada Di Owner ,Klok Mau Gratis/Beli Yg /Enc/No Enc Chat Owner`,
				templateButtons: [
					{ urlButton: { displayText: "Script Bot", url: "https://wa.me/6281946945315?text=bg+gw+mau+beli+sc+recodenya+abg+yg+no+enc" } },
				],
			},
			{ quoted: msg }
		);
	},
};
