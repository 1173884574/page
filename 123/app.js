//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    data: {
      films_old: [      //bi0 youku1 aqy2 by3 ba4 ya5 bya6
        {
          cover: "http://pic0.qiyipic.com/image/20180327/43/9d/a_100135895_m_601_192_108.jpg",
          title: "四牌士",
          day:1,
          id: 5,
          num: 0,
          scxx: false,
          goal: 7.3,
          detail: "正义与邪恶共同生活！？某个小学的同级生4人组，他们在毕业后分别成为了英雄、黑暗英雄、怪人、怪兽之类的人物…某一天，互为敌人的他们终于相遇并开始了战斗，在壮绝的战斗之后他们互相知道了彼此的身份，为了友情，本来有着互相厮杀宿命的他们摈弃前嫌开始了共同生活！"
        }, {
          cover: "http://pic7.qiyipic.com/image/20180327/ea/b5/a_100135900_m_601_192_108.jpg",
          title: "智龙迷城",
          id: 6,
          day: 1,
          num: 1,
          scxx: false,
          goal: 7.2,
          detail: "本作不同于智龙迷城X，讲述的是以现代为舞台，热血小学生明石大河以职业游戏玩家世界的第一名为目标而奋斗的成长故事。",
        },
        {
          cover: "http://pic6.qiyipic.com/image/20171231/f9/ff/a_100119291_m_601_192_108.jpg",
          title: "妖怪旅馆营业中",
          id: 2,
          day: 1,
          num: 2,
          scxx: false,
          goal: 7.2,
          detail: "女大学生津场木葵拥有从过世的祖父那里继承来的、能看见妖怪的能力。她突然被抓到了妖怪栖息的隐世的老字号旅馆“天神屋”。感到困惑的葵得知了祖父留下的庞大欠款，以及她作为抵押必须嫁给鬼神大老板这一约定。无法接受的葵为了反抗婚事、起死回生，而向妖怪们宣言她会在天神屋工作来偿还欠款……"
        },
        {
          cover: "http://pic7.qiyipic.com/image/20180327/e5/a4/a_100136013_m_601_192_108.jpg",
          title: "敦君与女朋友",
          day: 5,
          id: 5,
          num: 3,
          scxx: false,
          goal: 7.5,
          detail: " 青梅竹马的敦君和小音是一对恋人。但，敦君却以粗暴的言辞冷淡对待小音，总是一副严苛的态度……。但那却是敦君的“最喜欢小音了！”这种心情的反面表现。敦君，以及对于敦君的这种言行毫不在意地“深爱敦君”的小音，描绘他们之间日常的学园青春恋爱喜剧"
        },
        {
          cover: "http://pic0.qiyipic.com/image/20180502/d3/93/a_100047949_m_601_m2_192_108.jpg",
          title: "博人传 火影忍者新时代",
          id: 6,
          day: 4,
          num: 4,
          scxx: false,
          goal: 7.2,
          detail: "和平的同时也在飞速近代化的木叶村。高楼耸立、巨大荧屏中播放着影像、链接区域与区域之间的电车在村中驰骋。虽说是忍者之村普通人也开始增加、忍者们的生活方式也发生改变的那个时代……村子的头目，七代目火影漩涡鸣人的儿子博人，进入了培育忍者的忍者学校学习。周围的同学们都带着“火影之子”的偏见来看待他、博人则用他史无前例的天赋踢飞这些偏见！博人遇到了新的同伴、并且向迷之突发事件进行挑战？在大家心目中犹如疾风般长驱直入的“漩涡博人”的故事现在、开始!!"
        },
        {
          cover: "http://pic9.qiyipic.com/image/20180327/3a/42/a_100109778_m_601_m2_192_108.jpg",
          title: "重神机潘多拉",
          id: 4,
          day: 3,
          num: 5,
          scxx: false,
          goal: 7.3,
          detail: "2031年，新一代能源装置量子反应堆失控引发的事故“翔龙危机”给世界带来了剧变。突然，从地下散发出的光芒吞没了都市楼群，天翻地覆。而后，超越并融合了生物、机械、植物的未知特异进化生物“B.R.A.I”出现了。7年后，为了对抗以惊人的速度进化着、使人类陷入了灭亡危机的B.R.A.I，翔龙市作为绝对防卫都市“新翔龙市”得到了重生。那里，是人类最后的希望之都。在命运引导下，雷昂、可依、坤灵、道格聚集于新翔龙。塞西尔、凯恩、杰、格伦将他们纳入城市的防卫军。为人类存亡而战的特种部队“潘多拉”诞生了。签约之时，希望便寄托给了他们——",
        },
        {
          cover: "http://pic6.qiyipic.com/image/20180208/a5/2b/a_100127201_m_601_192_108.jpg",
          title: "偶活学园（偶像活动）Friends! ",
          id: 2,
          day: 4,
          num: 6,
          scxx: false,
          goal: 7.7,
          detail: "本作的主题是“与朋友一起进行偶像活动！”，组成双人组合，以顶级偶像称号“钻石友谊”为目标，一起偶活吧！"
        },
        {
          cover: "http://pic2.qiyipic.com/image/20171220/bb/ec/a_100109711_m_601_m1_192_108.jpg",
          title: "全金属狂潮 第4季",
          id: 6,
          num: 7,
          day: 3,
          scxx: false,
          goal: 8.5,
          detail: "打倒了敌人“汞合金”的九龙、盖茨等强敌，恢复了以往和平日常的“阵代高中”。但，这样的日子并未延续多久……。持续失态的“汞合金”开始正式向相良宗介等人发动袭击。世界各地的“秘银”基地遭到强袭！泰莎率领的Tuatha de Danaan所容身的“美利达岛”也遭到大量导弹、强袭机兵的攻击。另一方面，魔手也正在逼近日本的宗介与要！！宗介、要、泰莎等人，再度面临试炼！！！"
        },
        {
          cover: "http://pic3.qiyipic.com/image/20180327/38/47/a_100135928_m_601_192_108.jpg",
          title: "忍者少女千鸟 第3季",
          id: 6,
          num: 8,
          day: 6,
          scxx: false,
          goal: 7.7,
          detail: " 信长深爱的妹妹·市，嫁给了浅井长政。而浅井·朝仓军与织田军的冲突已经不可避免。只要有一瞬的迷惘就会失去重要事物的大规模野战“姊川之战”，含泪的千鸟于此战觉醒。名为天下布武的不合常理的征程！不得不将自己的妹夫打倒！！本格时代剧搞笑动画，姊川·石山篇 突入！！"
        },
        {
          cover: "http://pic2.qiyipic.com/image/20180323/da/8b/a_100131424_m_601_m2_192_108.jpg",
          title: "装刀凯",
          id: 1,
          num: 9,
          day: 2,
          scxx: false,
          goal: 8.6,
          detail: "讲述与魔刀合为一体的少年凯的残酷命运。 在森林中神秘死亡的女子身边，留下了刚刚出生的悲剧男子凯。他被刀匠亚门收养，成为了亚门的弟子。十多年后，凯在锻造时不幸失去了右手，于是亚门把代代相传的魔刀'死龙'熔化，为凯锻造出一只义手。与魔性武器合为一体的少年凯在后来惊心动魄的冒险和战斗中，见证了'美丽的武器和丑陋的人类'或'武器的残酷与人类的美丽'的故事。"
        },
        {
          cover: "http://pic0.qiyipic.com/image/20180407/93/80/a_100109766_m_601_m2_192_108.jpg",
          title: "我的英雄学院 第3季",
          id: 6,
          num: 10,
          day: 6,
          scxx: false,
          goal: 9.2,
          detail: "大部分的人类，在这个时代里都拥有名为“个性”的力量，但有力量之人却不一定都属于正义的一方。只要邪恶出现的地方，必定会有英雄挺身而出拯救众人。一名天生没有力量的少年——绿谷出久从小就憧憬一位顶尖英雄，而他的梦想就是成为伟大的英雄，可是，没有力量的他能实现自己的梦想吗？虽然困难重重，少年却依旧不放弃，朝著自己的目标勇往前进！"
        },
        {
          cover: "http://pic8.qiyipic.com/image/20171231/a1/5d/a_100086494_m_601_m1_192_108.jpg",
          title: "女神异闻录5 动画版",
          id: 4,
          num: 11,
          day: 7,
          scxx: false,
          goal: 7.8,
          detail: "高中二年级的春天，雨宫莲转学至东京的“秀尽学园”。以某个事件为契机觉醒为“PERSONA”使者的莲，与新认识的伙伴们一同组成“心之怪盗团”。把沾满邪恶欲望的大人们的“扭曲欲望”给偷走，让其改过自新。另一方面，在城市中陆续发生了不可思议的精神暴走事件……以大都会“东京”为舞台，作为高中生过着日常生活的同时，放学后作为“心之怪盗团”活跃——。壮大的歹徒传奇就此拉开序幕"
        },
        {
          cover: "http://pic1.qiyipic.com/image/20180331/d7/1c/a_100136730_m_601_m1_192_108.jpg",
          title: "温泉屋小女管家",
          id: 1,
          num: 12,
          day: 7,
          scxx: false,
          goal: 7.7,
          detail: "故事讲述了小学6年级的女生关织子在父母因事故双亡后被祖母收养，并住在祖母经营的温泉旅馆“春之屋”。她在新环境开始新生活，并且结识了一位幽灵少年立卖诚，成为了朋友。某一天祖母突然身体不适，此时敌对旅馆前来拜访，表示要收购春之屋。织子更是受到了同为小学生的敌对旅馆之女秋野真月的挑衅，也为了表现自己守护春之屋的决心而开始帮忙旅馆的工作，展开了成为老板娘的修行。收起详情",
        },
        {
          cover: "http://pic0.qiyipic.com/image/20180331/da/db/a_100122927_m_601_m1_192_108.jpg",
          title: "咯咯咯鬼太郎 第6季",
          id: 1,
          num: 13,
          day: 7,
          scxx: false,
          goal: 7.3,
          detail: "作为幽灵族最后幸存者的少年“鬼太郎”，施展妖术，和干尽各种坏事的妖怪们作战。鬼太郎是日本有“妖怪博士”之称的漫画家水木茂所创造，该漫画于1965年开始连载，这位穿黄黑横纹背心、传统日式木屐的小男孩，以头发、背心和木屐当武器，和一群住在神秘森林里的妖怪朋友们，一起解决妖怪与人类两个世界的许多问题。"
        },
        {
          cover: "http://pic7.qiyipic.com/image/20180327/23/2e/a_100136004_m_601_192_108.jpg",
          title: "美妙频道",
          id: 5,
          num: 14,
          day: 7,
          scxx: false,
          goal: 7.7,
          detail: " 美妙频道是一个无论谁都能简单地开始，谁都能成为偶像的梦想频道。开设自己的频道从而成为偶像是女孩子们共通的梦想。闪闪之丘中学一年级的桃山未来和萌黄绘萌为了对抗学校里面的人气偶像赤城安娜，也开设了自己的频道。同时非常熟悉美妙频道的优等生青叶伦香也加入了团队中，属于三个人的梦想偶像频道开始了！"
        },
        {
          cover: "http://pic5.qiyipic.com/image/20180119/fd/62/a_100122917_m_601_192_108.jpg",
          title: "拥抱！光之美少女",
          id: 2,
          num: 15,
          day: 7,
          scxx: false,
          goal: 7.6,
          detail: "野乃花是个想成为大姐姐的冒失娘，有一天碰到了不可思议的婴儿及照顾婴儿的仓鼠妖精哈利哈姆·哈利，这时“黑暗明日社”的敌人召唤了敌人袭来，小花为保护婴儿变身成为Cure Yell参战。为了保卫大家的未来，守护重要的事物以及小婴儿抱酱，Cure Yell的战斗拉开帷幕。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/b308ed7b60b8f7ff70f8a122adeb75914702611f.jpg",
          title: "OVERLORD Ⅲ",
          id: 0,
          num: 16,
          day: 2,
          scxx: false,
          goal: 9.8,
          detail: "时间为2138年。曾卷起一大风潮的虚拟现实体感型网络游戏《YGGDRASIL》即将迎来停服。玩家飞鼠在曾经以同伴和荣华自傲的根据地纳萨力克地下大坟墓，独自一人安静等待着那一刻。但是，不料发生了“过了结束时间却还没有登出”的异常事态。NPC们开始以自己的意志行动，不止如此，纳萨力克之外展开了从未见过的异世界。飞鼠为了寻找过去的同伴，以公会名安兹·乌尔·恭自称，决定在异世界扬名立万。他与宣誓绝对忠诚的部下一同，向新的地域进军。"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/f5d5f51b941c01f8b90b361b412dc75ecc2608d3.png",
          title: "工作细胞",
          id: 0,
          num: 17,
          day: 7,
          scxx: false,
          goal: 9.8,
          detail: "这是一个关于你自身的故事。你体内的故事——。人的细胞数量，约为37兆2千亿个。细胞们在名为身体的世界中，今天也精神满满、无休无眠地在工作着。运送着氧气的红细胞，与细菌战斗的白细胞……！这里，有着细胞们不为人知的故事。"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/0f11dfac18d744518669b2d211263f03d41d619c.png",
          title: "Angels of Death",
          id: 6,
          num: 18,
          day: 5,
          scxx: false,
          goal: 9.6,
          detail: "在一栋大楼最底层甦醒的13岁少女，瑞吉儿·加德纳(レイチェル?ガードナー)，她没有任何记忆，不知道自己为何在这里，而为了回到地面，她开始试着逃出去，但是突然在她面前出现了脸上缠满绷带、拿着有如死神般的镰刀的杀人鬼。“拜托你，杀了我。”“帮我一起从这里出去吧。那样的话，我就会杀了你。”两人之间的奇妙羁绊，随着那“荒诞的约定”而逐渐加深。这里究竟是什么地方？两人为何被囚禁于此？等待着两人的命运又是如何？为了从密闭大楼逃出的抱死觉悟之行揭开了序幕。两人最终是否能够坚守约定，并且安全地逃出这栋大楼呢？"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/1a7403f11fc24c06ae8ed8323aecab8b8b26d2cd.png",
          title: "后街女孩",
          id: 4,
          num: 19,
          day: 3,
          scxx: false,
          goal: 9.2,
          detail: "山本健太郎、立花亮与杉原和哉这三个黑道组织的流氓，因为犯了错，而被组织的老大下令转性变成女性偶像歌手替老板赚钱。原先三人想拒绝，但却因为不想死而接受了这个条件。但没想到他们成为偶像歌手之后，居然真的走红，有了许多粉丝。可是心中还是铁汉子的他们，每天都非常的苦恼……"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/db6e926d8860a995905845a8f592669840942344.jpg",
          title: "ISLAND",
          id: 0,
          num: 20,
          day: 7,
          scxx: false,
          goal: 9.3,
          detail: "远离本土、漂浮在海洋中的“浦岛”。那里有让人错认为是天国的富裕的自然资源，以及有被复杂的过去和古老的习俗所束缚的人们生活着。在这块被本土抛弃、被逐渐遗忘的土地上，居民们几乎不抱任何希望地在生活着。突然某一天，一位自称“时间旅行者”的青年漂流到这座岛屿。除了“切那”这个名字和“某个使命”以外的记忆都丧失了的青年，与凛音、夏莲、纱罗这3位少女相遇了，并展开了改变岛的未来的行动。围绕隐藏着古老的习俗与各种谜团的浦岛，青年和少女们的物语揭开了序幕。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/272e35317d38c9cbfb78fe238e83d8462acb2956.png",
          title: "异界少女召唤术",
          id: 6,
          num: 21,
          day: 4,
          scxx: false,
          goal: 7.5,
          detail: "坂本拓真，MMORPG“Cross Reverie”之中被其他玩家视为“魔王“的人物。有一天，他竟然以游戏中的身份被召唤至异世界，遇到了两个坚称自己才是“召唤主”的少女。两名少女对拓真施展驯服召唤兽的奴隶法术，却因此启动了拓真的特殊能力“魔术反射”，变成奴隶的人反而是两名少女！这下子拓真可伤脑筋了，他虽然是最强的魔术师，却完全没有沟通能力，最后竟然在自暴自弃的情况下借用游戏中的经典台词。“我很强？那当然，我可是Diablo…众人口中的魔王！”即将震撼全世界的魔王(假的)以绝对强大的力量勇闯异世界的冒险物语，正式登场！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/2b0d7996d9ef2a3786da05fe3f1b92857fc2e6ad.jpg",
          title: "天狼 Sirius the Jaeger",
          id: 6,
          num: 22,
          day: 4,
          scxx: false,
          goal: 7.6,
          detail: "故事背景定于昭和初期帝都的东京府，当时有一群专门以狩猎吸血鬼为生的职人——狩人。雾气之中，一位人狼混血的吸血鬼青年渐渐出现，他的名字为“尤里”，并持有名为“天狼之匣”的圣柜宝物。当尤里与狩人遭遇后，他在死斗之中渐渐获悉了与吸血鬼相关的某些“真实”……"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/dbdcbffd272e7927a344f682934f9cae934150db.png",
          title: "千绪的上学路",
          id: 0,
          num: 23,
          day: 5,
          scxx: false,
          goal: 9.3,
          detail: "自称“中下”等级的女高中生千绪，上学时徒步从自家前往学校。但是在上学路上等待着的，却是从意外的禁止通行、与距离感微妙的同学相遇开始，到堵在路上的暴走族、以及尿意……等等，各种各样的障碍。千绪能在今天早上也顺利地按时到校吗……！？"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/df92247e200aeb61f8aceda2e2b661c7dc07a328.jpg",
          title: "春原庄的管理人小姐",
          id: 0,
          num: 24,
          day: 4,
          scxx: false,
          goal: 8.9,
          detail: "椎名亚树由于外表的缘故而总不被人当成男人看待，他为了改变自己而在升入初中时前往东京，住进了春原庄。在那里等着亚树的，是受到性格天然又爱恶作剧的春原庄管理员·春原彩花从身心两方面疼爱有加的每一天。不止如此，其他的同居人也全都是年长的女生……。治愈与心跳满载，不由得想要向管理员姐姐撒娇的年龄差（御姐正太）恋爱喜剧决定版！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/a74b3efe4406cbfa36e124079c27e73a141cb7fb.jpg",
          title: "轻羽飞扬！",
          id: 4,
          num: 25,
          day: 1,
          scxx: false,
          goal: 7.5,
          detail: " 作品描绘了以国际高中比赛为目标的县立北小町高中羽毛球部的轨迹。运动神经超群，但却回避着羽毛球的一年级生羽咲绫乃。以日本第一为目标，日夜练习的三年级生荒垣渚。支撑着羽毛球部的伙伴和教练，还有个性洋溢的对手们。超高速飞舞的羽毛球羽翼上乘载着思绪，青春羽毛球故事就此开幕！！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/a36c510217610bf3e8486b3b02c7d3db1a6b288c.jpg",
          title: "百炼霸王与圣约女武神",
          id: 0,
          num: 26,
          day: 7,
          scxx: false,
          goal: 6.7,
          detail: "来自现代的少年周防勇斗，他误闯到战乱中的黎明世界「攸格多拉西尔」。这是一个弱肉强食的世界，许多氏族彼此争夺霸权，勇斗则以现代知识为武器，仅仅十六岁便登上统领千军万马的宗主之位。一位普通的少年在异世界里称王称霸，同时还有与其缔结誓杯契约、宣誓忠诚不二之心的美丽女武神们围在身边——"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/1cb9e69812d7227fdb0bf5bf4eb45662fef8ea60.jpg",
          title: "邪神与厨二病少女",
          id: 0,
          num: 27,
          day: 1,
          scxx: false,
          goal: 6.7,
          detail: "一位少女与恶魔“邪神酱”展开的略危险的同居生活喜剧！魔界的恶魔，通称“邪神酱”某天突然被召唤到了人间界。召唤她的人是住在神保町破旧公寓的略有些腹黑的女大学生“花园百合铃”。虽然召唤了邪神酱，却不知道让她？回到魔界的方法。邪神酱和百合铃迫不得已开始一起生活，但根据邪神酱所说，“如果召唤者死掉我就能回到魔界了”。于是邪神酱所采取的行动是……！？"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/5323a9d39963ba4360f3628d8aea111451a9bbf8.png",
          title: "昴宿七星",
          id: 0,
          num: 28,
          day: 5,
          scxx: false,
          goal: 7.4,
          detail: "曾经在博得全世界人气的MMORPG《UNION》中成为传说的小学生队伍“昴星团”。但，在游戏中GAME OVER的旭姬，在现实中也同时死亡了。《UNION》运营停止，“昴星团”的成员也各奔东西。在这6年后——。登录进新生《Re'Union》的高中生阳翔，在那里与本应死去的儿时好友·旭姬重逢了。她到底是电子的幽灵，还是……？这是在网络游戏中编织而成的儿时好友们的“约定”的故事。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/0342f8915854f6ee18869137b0361d3b70d9f9da.png",
          title: "Free!-Dive to the Future-",
          id: 0,
          num: 29,
          day: 3,
          scxx: false,
          goal: 9.8,
          detail: "高中毕业，心中留存着通过游泳联系起来的羁绊，向着各自的未来迈出步伐的遥等人。遥在东京和曾经一起游过接力赛的旭重逢了。遥中学时的记忆被唤醒。在他的心中苏醒的，是“那时”郁弥的身姿。和遥一起上京的真琴，开始向新的梦想迈进，而出发前往悉尼的凛，则在新天地迎来了意外的邂逅。在他们各自的未来前方等待着的，会是新的挑战吗？还是说，是与残存的过去之间的对峙……？"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/7c9002f893f1a9debde1c38b860d64ef31c20d03.png",
          title: "碧蓝之海",
          id: 0,
          num: 30,
          day: 6,
          scxx: false,
          goal: 9.8,
          detail: "北原伊织升入大学后，开始寄住在伊豆的叔父所经营的潜水用具店“Grand Blue”。传入耳中的波涛声、炽烈照射的太阳、开始一起生活的可爱表姐妹……青春的大学生活！这样的伊织所面临的却是——除了野球拳以外的猜拳一概不知的强壮男人们！！刚一入学就被大学潜水社团“Peek a Boo”所盯上了的伊织，在会长时·田信治和三年级学生·寿龙次郎的怂恿下，不知不觉已经身为社团的一员加入了他们的愚蠢喧嚣中。在大学中认识的虽然长得帅但性格却很遗憾的宅男——今村耕平也加入其中，他们的青春向着越来越奇怪的方向转进。明明在寄住的地方有着可爱的表..."
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/cc27b47f07d14e3de0f6f7d60ede625fb9ae9727.png",
          title: "One Room 第二季",
          id: 0,
          num: 31,
          day: 2,
          scxx: false,
          goal: 9.8,
          detail: "《One Room》的舞台，发生在“主角（One）的居室（Room）”当中。观众们将会跟三位少女轮番邂逅，并跟三位少女展开一段以主角的居室为中心的故事。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/0c835ce8e336c434a6337f7c5d47751c1c8cfa5c.jpg",
          title: "中间管理录利根川",
          id: 0,
          num: 32,
          day: 3,
          scxx: false,
          goal: 9.2,
          detail: "在帝爱集团会长·兵藤和尊的命令下，被交付了由欠债者们进行的“死亡游戏”这一企划的干部·利根川幸雄！！立刻召开企划会议的利根川，摆在他面前的是苦难……！！烦闷……！！以及绝望……！！描绘了夹在会长与黑衣人之间苦恼不已的利根川的恶魔外传，拉开帷幕……！！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/12014338f3c5bc350b95e71d619750441d6044f2.jpg",
          title: "付丧神出租中",
          id: 0,
          num: 33,
          day: 1,
          scxx: false,
          goal: 7.3,
          detail: "阿红和清次姐弟，经营一间出租生意的古道具店“出云屋”。所谓的出租，是指锅、釜、被褥、衣服等各式各样的物品，以不同金额租借给客人。因为天灾不断，所以各种家庭财产反而成了妨碍。对于生活必须的物品，倒不如用租借的方式取代购买。因此在江户，这并不是一门多么稀奇的行业。但是，在这间出云屋的旧道具店里，却诞生出许多经过上百年使用而化为“付丧神”的妖怪。随着这些道具被借出，也陆续传出奇怪的流言。而这些高傲、喜欢恶作剧的付丧神，也让出云屋姐弟天天头疼，为了解决这些爱胡闹的付丧神们，姐弟二人往往卷入各种事件当中。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/638638a4a165ecad9954c10cd2115fcf7b800be8.jpg",
          title: "刃牙 II",
          id: 0,
          num: 34,
          day: 1,
          scxx: false,
          goal: 7.2,
          detail: "徒手格斗的经典作品忍牙的第二部！范马勇次郎狂傲登场！百年一度的中国最大之武术大会——大擂台赛！“地上最强生物”范马勇次郎对上“拳圣”刘海王，激突的第一战开始！另外，中毒手不解之毒性命垂危的刃..."
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/d5a0beff151df03292a16ded616744ed09751ce8.jpg",
          title: "LORD of VERMILION 红莲之王",
          id: 6,
          num: 35,
          day: 6,
          scxx: false,
          goal: 7.5,
          detail: " 舞台为2030年的东京。东京近郊一带突然观测到了高频共鸣音，同时城市也被红雾给包围。接着，听到那个声音后无论是动物还是人都会失去意识。随着首都功能的麻痹，政府暂时转移到大阪，并推测引起该现象的罪魁祸首应该是不明真身的病毒，进一步担心此为流行性病毒，于是封锁了东京。但是，自这个“大共鸣”6天后，失去意识的人们像什么事都没发生一样地醒了。之后，封锁都市·东京逐渐恢复了作为城市的功能，但以那天为界，各种“异常事件”开始发生，人们相继地被进一步被非日常给侵蚀。其中，解放隐藏在血中的力量的年轻人们，朝着“英血之器”觉醒——他们被彼此的力量所吸引，不容分说地相遇，心灵相通，相互收割性命，逐渐被残酷命运的环链给吞噬"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/b0e49708533244ea59635b42282edf25bc499eab.jpg",
          title: "前进吧！登山少女 第三季",
          id: 0,
          num: 36,
          day: 2,
          scxx: false,
          goal: 9.6,
          detail: "一起去吧——与无可替代的朋友一起，去与那美丽的景色相会。喜爱室内活动、有恐高症的葵，升入高中时与儿时好友日向重逢，虽然她在日向的带领下疲惫不堪，却也因此累积了登山和户外活动的经验。葵也逐渐对于登山乐在其中。之后，她们的季节由夏转秋——。葵与以登山为契机而增加的朋友们一起，努力思考下一次要登上哪一座山。看着以富士山登顶为目标而锻炼体力，并开始向新的户外活动积极发起挑战的葵，日向也逐渐感到了安心……。欢笑、哭泣、登山……描绘尽情享受登山快乐的中学生登山少女们的《向山进发》。期待已久的“Third Season”，终于开山！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/7a18f066199cd84191a67d9317dc4a144780d0f1.jpg",
          title: "暗芝居 第六季",
          id: 4,
          num: 36,
          day: 6,
          scxx: false,
          goal: 7.3,
          detail: "“南来北往的都来瞧一瞧，暗芝居要开始喽” 每天到了黄昏5点，戴着诡异面具的江湖艺人在街上敲锣打鼓，招揽顾客，摇着纸芝居，为前来围观的观众讲述一篇篇短小精悍并且恐怖阴森的故事。 每集的内容就在江湖艺人的呐喊声中拉开了序幕。。。"
        },
        {
          cover:
          "http://i0.hdslb.com/bfs/bangumi/2fa3b4a2dbad3d307876cec4fa458fb2cbb50681.jpg",
          title: "千枪士",
          id: 0,
          num: 37,
          day: 2,
          scxx: false,
          goal: 7,
          detail: "古枪vs现代枪，绝望之战—— 　　全世界因核战争而荒废，在那之后的时代——。在世界帝府的绝对统治之下，人们全都受到管制，在被夺走了自由的世界中生存。 　　但，在一切武力均被禁止之时，还存在着为了打破世界帝的独裁而暗中持续抗战的反抗运动。他们手持作为美术品留下的“古枪”，发起挑战。以及，如同呼应其灵魂般现身的古枪化身“贵铳士”。高贵华丽地战斗的他们所拥有的“绝对高贵”，给世界带来一线希望——！ 　　获得生命，生机勃勃地闪耀光辉的年轻贵铳士们的日常。欢笑、哭泣、喜悦、迷茫、时而受伤，即使如此也一心追求自身的“绝对高贵”而战的美丽年轻人们的故事。我们为何而战，又应守护何物—— 　　Be Noble！"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/264f208707e5985d22b5b53f35b874425dd937f7.jpg",
          title: "梦王国与沉睡的100王子",
          id: 0,
          num: 38,
          day: 4,
          scxx: false,
          goal: 9.4,
          detail: "在下班回家途中的主人公，突然来到了另一个世界…… 这里是以“梦”作为力量的“梦世界”。 梦世界现在正遭受到“食梦兽”的威胁，它吞噬着人们的梦、 主人公一边抱有疑问，一边唤醒沉睡中的王子们…… 与他们一起在这个世界，夺回梦境……"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/f727ff7a769ebec48d2e404e878593bf649d651c.jpg",
          title: "音乐少女",
          id: 0,
          num: 39,
          day: 7,
          scxx: false,
          goal: 8.0,
          detail: "“PINE RECORDS”（通称：PIRECO）所属的千岁春、熊谷绘里、龙王更纱、迎桐、迎羽织、箕作沙沙芽、西尾未来、雪野日阳、具志坚修普、金时琴子、诸冈露露11人，是名为“音乐少女”的偶像组合的成员。 　　但“音乐少女”却是完全火不起来的C级偶像。 　　不鸣不飞&赤字累累的“音乐少女”，制作人池桥和成员们却仍然在拼命努力着。 　　池桥认为“音乐少女”需要新的成员。像是抓住成功的引爆剂那样的偶像！于是，他为了选拔而日夜操劳。 　　这样的某一天，“音乐少女”与主人公·花子相遇了……"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/e5b3fca7ea7ef660caa810924c44518513636f9d.jpg",
          title: "少女☆歌剧 Revue Starlight",
          id: 0,
          num: 40,
          day: 5,
          scxx: false,
          goal: 9.6,
          detail: "“舞台少女”——以未来的舞台女演员为目标，光芒四溢的少女们。 某天，她们收到了一封邮件。“请去取得吧　你所希望的那颗星”为了摘取闪耀的星星，而聚集于选拔会场的9名舞台少女。 追求光芒的心意、执着、命运——在舞台上交错。 现在，正是拉开Revue的序幕之时。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/c870603959b84f39595babd77d04a9091c9b0714.png",
          title: "打工小哥！之2！",
          id: 0,
          num: 41,
          day: 5,
          scxx: false,
          goal: 9.4,
          detail: "以很有精神为优点的茶色虎斑猫“泽TAPIO”与性格乖僻的俄罗斯蓝猫“ROSHI原KUE彦”，同为大学同年生的两人透过各式各样的打工经验了解工作的辛苦，是一部“忙到想要借猫手”系的动画。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/cae1cdadf28007e57e85f6987111d7f3376566d5.jpg",
          title: "偶像大师灰姑娘剧场 第三季（TV版）",
          id: 0,
          num: 42,
          day: 2,
          scxx: false,
          goal: 9.6,
          detail: "熟悉的偶像们，今天也是非常地吵闹，包含平常未被描写的偶像们度过假期的方式，和偶像们的搞笑剧等丰富多彩内容的短篇动画，终于要开幕了。"
        },
        {
          cover: "http://i0.hdslb.com/bfs/bangumi/2fcabc137578bbac2b322b102a905138ce10c2e5.jpg",
          title: "深夜！天才傻鹏",
          id: 4,
          num: 43,
          day: 3,
          scxx: false,
          goal: 0,
          detail: "该作讲述的是傻鹏一家四口的故事，其中古田新太饰演笨蛋爸爸，入野自由饰演傻鹏，日高法子饰演妈妈，野中蓝饰演弟弟·阿一，除此之外，石田彰、森川智之、樱井孝宏也将参演。"
        },
        {
          cover:
          "http://r1.ykimg.com/051600005A3C633CADBAC3056A0177E0",
          title: "童话魔法使",
          id: 0,
          num: 44,
          day: 4,
          scxx: false,
          goal: 7.4,
          detail: "只为了你而编织的故事。”让故事得以实现的，少女们的愿望。散布于世界的故事“原书”。少女们与“原书”相遇，被其选中，获得魔法，终成“原书使”。这是，以这样的“原书使”为目标的“见习原书使”少女们，与“原书”一同编织出自己的故事的梦与魔法与青春的物语——"
        },
        {
          cover:
          "http://r1.ykimg.com/051600005AC49084ADBDD367C706745E",
          title: "最终休止符 无止境的螺旋物语",
          id: 2,
          num: 45,
          day: 4,
          scxx: false,
          goal: 7.7,
          detail: "专门打倒异性怪物的人被称之为 Period，主角春是一位见习Period 隶属于第 8 支部，但是由于一场神奇的盗窃案件，第 8 支部的运营出现了财务困难，已经被总部舍弃的第 8 支部只剩下包含春在内的三名 Period，为了能够重建第 8 支部，春与自己的伙伴投入到了冒险当中——"
        },
        {
          cover: "http://r1.ykimg.com/051600005AD86CAE859B5C05C906A425",
          title: "甜甜私房猫 第四季",
          id: 5,
          num: 46,
          day: 7,
          scxx: false,
          goal: 7.5,
          detail: "讲述一只黑灰斑纹的迷路小猫被一个善良的小男孩捡回家后，与小男孩一家人温馨的生活在一起，描写着甜蜜家庭的爱宠日常故事。"
        },
        {
          cover: "http://r1.ykimg.com/051600005B3ED4FDADBDD3D2FA04C99D",
          title: "罗布奥特曼 日配版",
          id: 5,
          num: 47,
          day: 6,
          scxx: false,
          goal: 7.3,
          detial: " 特别是哥哥胜巳和弟弟勇海，他们得到了罗布陀螺仪与罗布水晶，哥哥有着泰罗奥特曼的火元素的力量，变身为罗索奥特曼，而弟弟有着银河奥特曼水元素的力量，变身成为布鲁奥特曼。而他们的故事也将围绕着这一家展开，前期因为兄弟俩刚刚得到奥特力量，还不能完全熟悉，因此也产生了很多危机。但是随着兄弟俩的配合以及战斗经历的增加，他们得到的罗布水晶就越来越多，然后就可以不停的变换形态。在这部奥特曼中，我们还将看到兄弟俩除了和怪兽之间战斗的故事，还有他们一整个家族的故事。"
        },
        {
          cover: "http://r1.ykimg.com/0516000059C227D0ADBC0904BD0E2C9D",
          title: "闪电十一人：阿瑞斯的天秤 日配版",
          id: 1,
          num: 48,
          day: 1,
          scxx: false,
          goal: 7.6,
          detail: "本故事的时间线坐落在第一部作品后的平行世界。雷门中学足球队在明日之星(FF)大赛中取得优胜，外星学园并未出现及袭击雷门中学，日本闪电十一人队于FFI世界大赛惨败。FF大赛的夺冠雷门成员全员以强化委员的名义，被分散到各地的国中，强化总体足球实力。 此平行世界的中学足球队必须有赞助商才能营运足球队。在伊那国岛有一群热爱足球的中学生，因为伊那国中学的校长觉得伊那国岛无法继续追随足球的热潮加上毫无经费请赞助商，从而废止足球部。突然有个神秘赞助商表示，要是他们转入雷门并且赢过一场的话，就给伊那国提供赞助。主人公们认为这是他们最后的机会。为了证明他们对足球的热忱，决定前往东京入读雷门中学参加比赛。作品剧情将从三位主要角色稻森明日人、灰崎凌兵、野坂悠马的视角个别展开"
        },
        {
          cover:
          "http://r1.ykimg.com/051600005A291659859B5E03540F3FC6",
          title: "Butlers 千年百年物语",
          id: 4,
          num: 49,
          day: 4,
          scxx: false,
          goal: 7.8,
          detail: "TV动画《Butlers～千年百年物语～》改编自中国漫画《男神执事团》，讲述的是主人公是头脑聪明、眉清目秀、只要一个爽朗的微笑就能俘获妹子芳心的学生会会长神宫司高马与多才多艺、温柔敦厚、因为会在拿铁里画猫头鹰图案而深受女性欢迎的咖啡店店员羽早川翔。而这两位美男子竟是超越时空的宿敌。被称为“Butlers”的充满魅力的角色交织，异能力战斗与嬉闹的学园轻喜剧"
        },
        {
          cover: "http://r1.ykimg.com/051600005A965782AD881A62C50E57F7",
          title: "棒球大联盟 2nd",
          id: 1,
          num: 50,
          day: 6,
          scxx: false,
          goal: 7.1,
          detail: "电视动画《棒球大联盟2nd》改编自满田拓也著同名运动漫画，于2017年10月在《周刊少年Sunday》宣布动画化，由NHK ENTERPRISES负责动画制作 。"
        },
        {
          cover: "http://r1.ykimg.com/051600005AC1E29EADBAC383E803E207",
          title: "温泉屋小女管家",
          id: 4,
          num: 51,
          day: 7,
          scxx: false,
          goal: 7.4,
          detail: "儿童向小说作品《年轻老板娘是小学生！》由令丈弘子创作，亚沙美负责插画，由讲谈社青鸟文库出版，已出版23卷小说单行本，累计发行量突破300万部。故事讲述了小学6年级的女生关织子在父母因事故双亡后被祖母收养，并住在祖母经营的温泉旅馆“春之屋”。她在新环境开始新生活，并且结识了一位幽灵少年立卖诚，成为了朋友。某一天祖母突然身体不适，此时敌对旅馆前来拜访，表示要收购春之屋。织子更是受到了同为小学生的敌对旅馆之女秋野真月的挑衅，也为了表现自己守护春之屋的决心而开始帮忙旅馆的工作，展开了成为老板娘的修行。"
        },
        {
          cover: "http://r1.ykimg.com/051600005A41B028AD881A0669072FAB",
          title: "HUGTTO 光之美少女",
          id: 2,
          day: 7,
          num: 52,
          scxx: false,
          goal: 7.6,
          detial: "野乃花是个想成为大姐姐的冒失娘，有一天碰到了不可思议的婴儿及照顾婴儿的仓鼠妖精哈利哈姆·哈利，这时“黑暗明日社”的敌人召唤了敌人袭来，小花为保护婴儿变身成为Cure Yell参战。为了保卫大家的未来，守护重要的事物以及小婴儿抱酱，Cure Yell的战斗拉开帷幕"
        },
        {
          cover:
          "http://r1.ykimg.com/051600005ACB0618859B5C05C7073BE9",
          title: "高达创形者",
          id: 0,
          day: 2,
          num: 53,
          scxx: false,
          goal: 5.5,
          detail: "「高达模型联网对战（ＧＢＮ）」是能在计算机虚拟空间（次元世界）内，使用高达模型享受执行各种任务乐趣的最新在线游戏。中学生三上陆与挚友日高勇夫，拉着同班同学矢代桃华，一起进入那片广大的世界。他们成为ＧＢＮ的居民「潜行者」后，认识了对高达模型有着奇妙感受力的神秘少女莎拉，并开始与她一起行动…次元世界里有小陆的偶像，冠军「九条响也」等知名潜行者，有团队系统让多名潜行者组成「战队」，也有使用非法工具-外挂贴纸的一群「大潜行者」阻碍他们。小陆等人经过了各种相遇与经历，除了创造高达模型以外，也开始一点一滴地创造自己的冒险！"
        },
        {
          cover: "http://r1.ykimg.com/051600005AB4A5C8ADBC09AE2B0989FE",
          title: "异世界居酒屋",
          id: 0,
          num: 55,
          day: 1,
          scxx: false,
          goal: 8.5,
          detail: "居酒屋“阿信”是由大将矢泽信之与女服务生千家忍努力经营的小店。但不知为何，居酒屋正门却连接着异世界的城镇，古都阿伊特力亚。光顾“阿信”的都是一些个性独特的客人，比如懒惰的卫兵、低调的圣职人员，还有水运公会的老大。他们都对阿信大将酿出的美酒和自己从未吃过的料理感到惊喜不已。在享受美食的同时，他们也能暂时忘记日常生活的烦恼。"
        },
      ]
    },
  }
})