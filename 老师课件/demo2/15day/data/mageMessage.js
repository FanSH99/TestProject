var mageMessage = [{
    mageName: '戴纳',
    mageNameEn: 'dn',
    cv: '大冢明夫',
    mofa: ['hz', 'yj'],
    vid: 'v05324bgtqn',
    bg: '周游世界探寻宝藏的探险者。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-dn.png'
}, {
    mageName: '姬奈莉',
    mageNameEn: 'jnl',
    cv: '桑岛法子',
    mofa: ['hz', 'zy'],
    vid: 'v05324bgtqn',
    bg: '是个出身于敏斯特雷尔的一个魔导士世家，家里有着达到了一定的年纪就要出门增长见识再回家的传统。由于出身于舞蹈圣地，所以十分擅长舞蹈。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-jnl.png'
}, {
    mageName: '雪拉',
    mageNameEn: 'xl',
    cv: '长绳麻理亚',
    mofa: ['ll', 'sd'],
    vid: 'v05324bgtqn',
    bg: '儿时曾是暗黑公会的一员，后与媞雅交战时被她感化并与她一同生活。数年前的戴利欧拉事件导致她们生活的村庄被毁灭，两人也因此失散，从此雪拉一直在寻找媞雅，并靠接受委托换取赏金为生。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-xl.png'
}, {
    mageName: '悠',
    mageNameEn: 'y',
    cv: '下野紘',
    mofa: ['ll', 'sb'],
    vid: 'v05324bgtqn',
    bg: '与同为孤儿院出身的修奈是儿时的好玩伴，但在一次外出玩耍时遇到妖魔袭击跌落山崖，被人救走后便失去了记忆。（只记得修奈的脸，但误以为是袭击他的人）',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-y.png'
}, {
    mageName: '媞雅',
    mageNameEn: 'ty',
    cv: '阿澄佳奈',
    mofa: ['yj', 'sb'],
    vid: 'v05324bgtqn',
    bg: '媞雅由于体弱而自小修行治愈魔法，在与当时从属于暗黑公会的雪拉交战时治愈了受伤的她并收为妹妹一同生活。数年前的戴利欧拉事件导致她们生活的村庄被毁灭，两人也因此失散，从此媞雅一直在寻找雪拉，并靠接受委托换取赏金为生。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-ty.png'
}, {
    mageName: '修奈',
    mageNameEn: 'xn',
    cv: '立花慎之介',
    mofa: ['wz', 'xw'],
    vid: 'v05324bgtqn',
    bg: '与同为孤儿院出身的悠是儿时的好玩伴，但在一次外出玩耍时遇到妖魔袭击跌落山崖，被人救走后便失去了记忆。（只记得悠的脸，但误以为是袭击他的人）',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-xn.png'
}, {
    mageName: '妮可',
    mageNameEn: 'nk',
    cv: '小仓唯',
    mofa: ['wz', 'xw', 'sh'],
    vid: 'v05324bgtqn',
    bg: '妮可出身于一个普通的家庭，小时候跟着父母看过玛古诺尼亚的收获祭游行后，就梦想能像游行队伍中那些可爱的少女一样，拿着各种手持道具、穿得美丽性感地成为人群中闪耀的光芒。她攒了很久的零花钱买了这套衣服，父母答应她可以在18岁生日那天穿上它、去外面的世界旅行一番。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-nk.png'
}, {
    mageName: '克里森',
    mageNameEn: 'kls',
    cv: '佐藤拓也',
    mofa: ['zy', 'sd', 'sh'],
    vid: 'v05324bgtqn',
    bg: '克里森的爷爷和父亲都曾当过王国士兵队长，从小就对他进行严格的军事化教育，把他培养得十分刚正。长大后觉得自己的能力还不足以加入军队守卫国家，因此一个人踏上了修行的旅途。',
    mageImg: '//game.gtimg.cn/images/yw/web201905/pc/role-kls.png'
}];

var jobmessage = [
    {
        mofaName: '熔岩魔法',
        mofaNameEn: 'ry',
        orientation: '控制输出',
        desc: '熔岩职业，在速度与封印能力方面是很强的，同时，物理输出能力也是不可小觑的。对战时，因为速度的优势，可以杀敌人一个措手不防，加上极强的封印能力，以及因封印能力而加持的输出，是一个控制与输出并存的职业！',
        skill: [
            {
                skillName: '熔岩造型·怒海',
                skillDesc: '对3个目标造成物理伤害，技能额外获得5%的暴击加成，目标在该魔法等级30/50/70时会各增加一个。'
            },
            {
                skillName: '熔岩造型·炎柱',
                skillDesc: '对敌方1名目标进行物理攻击，如果场上存在自身召唤的熔岩造型，则攻击后给熔岩造型回复其最大生命值25%的生命，同时攻击后熔岩造型会对此技能主目标进行额外攻击。'
            },
            {
                skillName: '凝岩禁锢',
                skillDesc: '一定几率使敌军进入3回合凝岩禁锢状态，进入凝岩禁锢状态的敌军无法使用道具，召唤和宝器。'
            },
            {
                skillName: '熔岩造型·刺棘',
                skillDesc: '一定几率赋予敌军3回合刺棘状态，进入刺棘状态的敌军无法释放任何魔法和特技，且不能使用道具和进行普通攻击。对比自身速度快的单位，赋予成功率增加7%，当赋予效果成功时，于场上空余位置（最多4个）召唤熔岩造型，熔岩造型的攻击属性为被封印目标攻击较高值，最大不超过自身物理攻击的4倍，生命上限和其他属性继承自身对应属性的50%，一个魔导士最多只能同时召唤1个熔岩造型，此魔法使用需要间隔1回合后才能再次释放。'
            },
            {
                skillName: '大地熔毁',
                skillDesc: '对2个目标赋予熔毁状态，攻击者攻击带有熔毁状态的敌人时，攻击会带有3%额外破甲增益。目标在该魔法等级50/90时会各增加一个。'
            },
            {
                skillName: '奥义·业火之轮',
                skillDesc: '对敌方2个目标进行攻击，自身当前召唤的熔岩造型强化层数越高，伤害越高，使用后直接将自身的熔岩造型提高到最大强化层数，技能如果造成击杀，会对目标赋予2回合死亡禁锢状态，奥义使用后进入1回合休息状态。'
            }
        ],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_1.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_2.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_3.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_4.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_5.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ry_skill_6.jpg']
    },
    {
        mofaName: '灵蝶魔法',
        mofaNameEn: 'ld',
        orientation: '魔法持续输出',
        desc: '使用魔法凝聚出不同种类的灵蝶，对魔导士造成持续伤害和负面效果。拉锯战中无法忽视的强者！',
        skill: [
            {
                skillName: '灵蝶群舞',
                skillDesc: '对多名敌人造成魔法伤害，一定几率降低目标的魔法防御，目标数随技能等级增加最多增加至6人。'
            },
            {
                skillName: '镜花之梦',
                skillDesc: '对3名敌人造成魔法伤害，并100%赋予蚀骨效果，使目标回合结束扣除固定生命值，随回合数增加扣除的生命递增，若一直没有被净化，当效果正常结束时，瞬时造成一次较大的固定值伤害，所有伤害与自身魔法攻击值相关。'
            },
            {
                skillName: '水月之梦',
                skillDesc: '对2名敌人造成魔法伤害，并100%赋予断生效果，使目标受到的治疗降低，随回合数增加，降低的幅度增加，最多降低30%受到的治疗。且在回合结束时，目标会扣除少量固定生命值。'
            },
            {
                skillName: '明晰之梦',
                skillDesc: '对3个友方目标赋予明晰效果，增加目标的封印抗性，目标在该魔法等级30/50/70时会各增加一个。'
            },
            {
                skillName: '侵袭之梦',
                skillDesc: '对1名敌人造成魔法伤害，目标身上每存在一种伤害性的灵蝶，则攻击的次数增加1次，使用后净化目标身上的灵蝶，同时自身休息1回合。'
            },
            {
                skillName: '奥义·噩梦纪元',
                skillDesc: '怒气技，根据敌人阵营中两种攻击性灵蝶的数量，释放不同效果。如果拥有红色灵蝶的单位较多，则所有带有攻击性灵蝶的单位，均受到一次高额的伤害，伤害和自身魔法攻击力正相关。如果拥有蓝色灵蝶的单位较多，则所有带有攻击性灵蝶的单位，均会被赋予持续2回合的完全禁疗效果，无法收到任何治疗效果。'
            }
        ],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_1.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_2.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_3.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_4.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_5.jpg','//game.gtimg.cn/images/yw/web201905/pc/skill/ld_skill_6.jpg']
    },
    {
        mofaName: '换装魔法',
        mofaNameEn: 'hz',
        orientation: '物理群攻',
        desc: '呼唤存储于其他空间的武器，灵活变换攻击方式的魔导士。所有战斗场合都轻松应对！',
        skill: [{
            skillName: '魔力激荡',
            skillDesc: '使角色自身进入物理攻击力增加5回合的魔力激荡状态，此魔法战斗开始时自动释放一次，之后需要手动释放。'
        }, {
            skillName: '步枪·星夜狙击',
            skillDesc: '在魔力激荡状态下方可释放，对3名敌人造成物理伤害，使用后进入一回合休息状态，目标在该魔法等级30/50/70时会各增加一个。'
        }, {
            skillName: '手弩·箭阵连杀',
            skillDesc: '对1名敌人造成物理伤害，如在魔力激荡状态下使用，击杀敌人后会再次释放此魔法随机攻击下一个敌人。'
        }, {
            skillName: '步枪·定身魔弹',
            skillDesc: '在魔力激荡状态下方可释放，解除自身魔力激荡状态，对敌方1个目标造成物理伤害，并对目标附加不可驱散的定身状态，处于定身状态的单位受到的伤害增加，使用后将进入一回合休息状态。'
        }, {
            skillName: '复仇',
            skillDesc: '回合结束时，己方每损失一名友军（不含魔法兽），则为自身附加一次复仇盾，每个复仇盾可以反击一次角色单独受到的物理攻击。'
        }, {
            skillName: '奥义·狂欢加特林',
            skillDesc: '消耗150点怒气值释放的奥义技，对5个敌方目标随机倾泻多次物理伤害，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/hz_skill_6.jpg']
    },
    {
        mofaName: '速度魔法',
        mofaNameEn: 'sd',
        orientation: '速度变换',
        desc: '根据战况切换速度，攻击与支援并重的魔导士。鬼魅般的身影，是战场上灵活的猎手！',
        skill: [{
            skillName: '秘法·岚',
            skillDesc: '同时对2个敌方目标造成物理伤害，使用后，自身职业技能导致的加速和减速状态会被立刻清除，此技能对怪物可以造成额外伤害，目标在该魔法等级20/40/60时会各增加一个。'
        }, {
            skillName: '秘法·疾',
            skillDesc: '对敌方1名敌军造成少量物理伤害，40%使目标进入眩晕状态1回合，当自身的生命值为满值并且目标生命值低于最大生命值的60%，100%造成眩晕，眩晕状态下的敌人无法采取任何行动，使用后，角色自身立刻进入加速状态。'
        }, {
            skillName: '秘法·狂',
            skillDesc: '对敌方1名敌军造成物理伤害，并根据造成的伤害回复自身生命值，使用后，角色自身立刻进入减速状态。'
        }, {
            skillName: '秘法·灭',
            skillDesc: '对敌方1名敌军造成物理伤害，高速状态下中幅提升暴击率，并且此技能暴击时对目标赋予眩晕状态1回合，低速状态下大幅增加暴击率。'
        }, {
            skillName: '秘法·净',
            skillDesc: '驱散1名友军的所有控制状态。'
        }, {
            skillName: '奥义·永恒',
            skillDesc: '消耗150点怒气值释放的奥义技，对己方1名友军的生命值和魔法值恢复至最大比例的80%，如果对自己使用，则恢复至最大比例的100%，此魔法不会导致目标的生命值或者魔法值降低，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sd_skill_6.jpg']
    },
    {
        mofaName: '治愈魔法',
        mofaNameEn: 'zy',
        orientation: '持续治疗',
        desc: '使用晨曦之力进行治愈，增强团队生存能力的魔导士。这份温柔，正是最坚强的后盾！',
        skill: [{
            skillName: '极光审判',
            skillDesc: '释放魔力，同时对2个敌方目标造成魔法伤害，目标在该魔法等级20/50时会各增加一个。'
        }, {
            skillName: '治愈星辉',
            skillDesc: '为2名友军恢复生命，并附加每回合自动恢复气血的治愈状态，该状态持续5回合，在自身拥有星辉状态时，技能的目标数量增加1个，主目标恢复量最高，后续目标的恢复量依次递减，目标在该魔法等级50时会增加一个。'
        }, {
            skillName: '救赎之光',
            skillDesc: '为己方1个目标附加救赎状态，如果目标死亡，则立即复活，如果目标未死亡，则本回合内该目标死亡时会立即复活，该魔法触发复活时，会为自己附加可触发1次的星辉状态，持续3回合。'
        }, {
            skillName: '光之庇佑',
            skillDesc: '为己方3个目标增加魔法减伤和魔法伤害，持续5个回合，目标在该魔法等级30/50/70时会各增加一个。'
        }, {
            skillName: '星辉收束',
            skillDesc: '魔法释放时，会清除己方全体友军的治愈状态，并按照自身赋予的治愈状态回复量，直接双倍治疗目标。'
        }, {
            skillName: '奥义·圣光降临',
            skillDesc: '消耗150点怒气值释放的奥义技，对己方1名友军附加圣光降临状态，令该角色在2回合内处于无敌，并为所有角色恢复该角色所受伤害50%的生命值，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/zy_skill_6.jpg']
    },
    {
        mofaName: '力量魔法',
        mofaNameEn: 'll',
        orientation: '物理爆发',
        desc: '将魔力汇集到身体进行爆发输出，拥有压倒性的力量的魔导士。这份强大，所向披靡！',
        skill: [{
            skillName: '烈阳冲击',
            skillDesc: '同时对2个敌方目标造成物理伤害，目标在该魔法等级20时会增加一个。'
        }, {
            skillName: '腥风三连斩',
            skillDesc: '同一回合内，对同一目标发动三次强力攻击，使用后进入一回合虚弱状态，无法行动，防御降低，此技能需要当前生命值比例大于10%时使用,当习得魔法会心之后，击杀敌人可以令自己获得会心状态。'
        }, {
            skillName: '暗影潜伏',
            skillDesc: '进入蓄力状态，本回合无法行动，下一回合率先出手，对敌人造成一次物理伤害,当习得魔法会心之后，击杀敌人可以令自己获得会心状态。'
        }, {
            skillName: '生命感知',
            skillDesc: '感知1个敌人的生命信息，使目标的生命条显现出来，在虚弱和休息两种状态下依然可以使用。'
        }, {
            skillName: '会心',
            skillDesc: '使用腥风三连斩和暗影潜伏击杀敌人之后获取3回合会心状态，提升自身暴击率，并在本回合内抵御一次死亡，可以保留一点生命值复活。'
        }, {
            skillName: '奥义·地裂陨星',
            skillDesc: '消耗150点怒气值释放的奥义技，对1个敌人连续造成5次物理伤害，该技能不可被防御、保护、不会触发反击，使用后将进入一回合休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/ll_skill_6.jpg']
    },
    {
        mofaName: '文字魔法',
        mofaNameEn: 'wz',
        orientation: '封印控制',
        desc: '将敌人的精神玩弄于鼓掌之中的控制型魔导士。神秘莫测的文字，是通向胜利的预言！',
        skill: [{
            skillName: '哀叹之诗',
            skillDesc: '释放魔力，同时对2个敌方目标造成魔法伤害，目标在该魔法等级20/50时会各增加一个。'
        }, {
            skillName: '禁咒的诗歌',
            skillDesc: '一定几率使敌方1名敌军进入3回合的禁咒状态，处于禁咒状态的敌军将无法释放任何魔法。'
        }, {
            skillName: '永恒的安息',
            skillDesc: '一定几率使敌方1名敌军进入3回合的安息状态，处于安息状态的敌军无法释放任何魔法，且不能使用道具和进行普通攻击，该魔法释放后会使自身进入2回合的封印命中下降状态。'
        }, {
            skillName: '睡神的低语',
            skillDesc: '一定几率使用敌方2名角色随机进入5回合的睡眠状态，自身生命值越低，赋予概率越高，处于睡眠状态状态的敌军无法采取任何行动，被伤害后会解除睡眠状态。'
        }, {
            skillName: '噩梦',
            skillDesc: '习得该魔法后，对处于睡眠状态的敌军，禁咒状态和安息状态一定命中。'
        }, {
            skillName: '奥义·混沌赞美诗',
            skillDesc: '消耗150点怒气值释放的奥义技，对1个敌人造成大量的魔法伤害，并且使敌人进入3回合混沌状态，混沌状态下的敌人将会不受控制的攻击友军，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/wz_skill_6.jpg']
    },
    {
        mofaName: '声波魔法',
        mofaNameEn: 'sb',
        orientation: '魔法群攻',
        desc: '使用声波魔法进行攻击，具有极强爆发能力的魔导士。波形变换，为敌人奏响安魂曲！',
        skill: [{
            skillName: '暗影重金属',
            skillDesc: '释放魔力，同时对3个敌方目标造成魔法伤害，50%几率使目标进入声波状态，同阵营声波职业通过此魔法最多可以同时使6名单位进入声波状态，目标在该魔法等级30/50/70时会各增加一个。'
        }, {
            skillName: '灵魂共鸣',
            skillDesc: '对1名敌人造成魔法伤害，并对所有处于声波状态的敌军单位造成溅射伤害，该魔法需要间隔一回合后方可再次释放。'
        }, {
            skillName: '暴走声波',
            skillDesc: '对1名敌人造成魔法伤害，如果该敌军单位带有声波状态，会造成额外的魔法伤害加成。'
        }, {
            skillName: '震荡奏鸣',
            skillDesc: '对全体敌军中带有声波状态的敌人造成伤害，声波状态越多，造成的伤害越高，使用后所有敌军身上声波状态将会消失。'
        }, {
            skillName: '压制',
            skillDesc: '敌军中存在带有声波状态的敌人越多，自身的魔法防御力越高。'
        }, {
            skillName: '奥义·碎梦交响',
            skillDesc: '消耗150点怒气值释放的奥义技，自身进入4回合碎梦交响状态，该状态下被攻击时，会反弹给攻击者声波状态，同时每个回合结束会恢复自身少量生命值，使用后不会休息。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sb_skill_6.jpg']
    },
    {
        mofaName: '药剂魔法',
        mofaNameEn: 'yj',
        orientation: '治疗辅助',
        desc: '用魔力产生药剂，为同伴提供治疗、加速等支援的魔导士。团队里重要的辅助角色！',
        skill: [{
            skillName: '致命毒剂',
            skillDesc: '释放魔力，同时对2个敌方目标造成魔法伤害，目标在该魔法等级20/50时会各增加一个。'
        }, {
            skillName: '生命药剂',
            skillDesc: '为己方3名友军恢复生命，目标在该魔法等级30/50/70时会各增加一个。'
        }, {
            skillName: '奇迹药丸',
            skillDesc: '使用奇迹之药，立即复活己方1名已经死亡的友军，并恢复部分生命值。'
        }, {
            skillName: '强化药剂',
            skillDesc: '使用强化药剂，使己方1名友军进入2回合的强化状态，该状态下，友军的物理伤害、速度均会获得大幅度提升，如友军在强化状态下击杀敌军，会使该名友军立即获得2回合秘药护盾状态。'
        }, {
            skillName: '明视药剂',
            skillDesc: '为3名友军附加明视状态，明视状态的友军可以攻击到敌军处于潜行状态下的目标，目标在该魔法等级30/50/70时会各增加一个。'
        }, {
            skillName: '奥义·远古秘药',
            skillDesc: '消耗150点怒气值释放的奥义技，使5名友军获得2回合的秘药护盾状态，秘药护盾会为友军抵御一定定额的伤害量，奥义释放后下一回合会进入休息状态，目标在该魔法等级90时会增加一个。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/yj_skill_6.jpg']
    },
    {
        mofaName: '雪舞魔法',
        mofaNameEn: 'xw',
        orientation: '魔法群攻',
        desc: '使用雪晶进行攻击，并清除敌方增益的魔导士。华丽的冰雪中隐藏的，是死亡的轮舞！',
        skill: [{
            skillName: '雪晶回旋',
            skillDesc: '释放魔力，同时对3个敌方目标造成魔法伤害，当习得魔法极寒之后，会有30%的几率令自身进入极寒状态，目标在该魔法等级20/40/60/70时会各增加一个。'
        }, {
            skillName: '厄运之雪',
            skillDesc: '对1名敌人造成魔法伤害，并以30%的几率使该名敌人进入恢复力降低状态，如果自身处于极寒状态，则消耗极寒状态，必定使敌人进入恢复力降低状态。'
        }, {
            skillName: '霜雪哀歌',
            skillDesc: '对全体敌军造成少量魔法伤害，并减少目标少量魔法值，如果自身处于极寒状态，则消耗极寒状态，使敌军会损失更多的魔法值。'
        }, {
            skillName: '极寒',
            skillDesc: '习得该魔法后，释放雪晶回旋时，有30%的几率使自身进入极寒状态，极寒状态会强化厄运之雪，霜雪哀歌，雪之涟漪和寒光驱散的魔法效果。'
        }, {
            skillName: '寒光驱散',
            skillDesc: '对2名敌军使用，驱散该名敌人身上所有的增益状态，如果自身处于极寒状态，则消耗极寒状态，增加1个目标，目标在该魔法等级50/90时会各增加一个。'
        }, {
            skillName: '奥义·雪国狂歌',
            skillDesc: '消耗150点怒气值释放的奥义技，对全体敌军造成魔法伤害，并为主目标附加2回合的狂歌状态，处于狂歌状态下的敌人死亡时无法被复活，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/xw_skill_6.jpg']
    },
    {
        mofaName: '守护魔法',
        mofaNameEn: 'sh',
        orientation: '守护同伴',
        desc: '使用魔法盾为队友分担伤害，免疫控制。这份坚毅果敢，属于倍受同伴信赖的守护者！',
        skill: [{
            skillName: '光之羽',
            skillDesc: '同时对2个敌方目标造成物理伤害，此技能伤害在基础伤害的90%-110%之间波动，并且此技能不会触发保护或者反击，目标在该魔法等级20/40/60时会各增加一个。'
        }, {
            skillName: '绝地反攻',
            skillDesc: '对2个敌方造成物理伤害，当自身的生命值低于70%时，目标数增加为3个，当生命值低于40%时，目标数增加为4个。'
        }, {
            skillName: '守护之盾',
            skillDesc: '对己方1个目标赋予1回合的守护之盾效果，被赋予效果的目标，受到的部分伤害和控制效果会由守护职业分担，该魔法释放时会额外增加自身速度，并且释放后需要间隔一回合后方可再次释放。'
        }, {
            skillName: '睿智箴言',
            skillDesc: '扣除自身最大血量的10%，对己方2个目标回复因此技能扣除的生命值的一定比例的魔法值，此魔法在自身生命值低于最大值的20%时不能使用。'
        }, {
            skillName: '信仰',
            skillDesc: '进入战斗后，自身会获得信仰·盾效果，该效果可以抵消1次可以被净化的控制或者负面效果，获得效果瞬间如果自身已经拥有负面或者控制效果，则直接抵消掉负面或者控制效果中的一类，当信仰·盾效果被消耗后5回合，会再次获得信仰盾效果，同时习得此魔法后，进入战斗时，自身最大生命值会根据自身速度值额外增加。'
        }, {
            skillName: '奥义·真理圣堂',
            skillDesc: '消耗150点怒气值释放的奥义技，净化全体己方目标可以被净化的负面和控制效果，同时赋予绝对守护效果，效果持续期间内，免疫除睡眠状态外的控制效果，此魔法释放时会额外增加自身的速度，奥义释放后下一回合会进入休息状态。'
        }],
        skillImg: ['//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_1.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_2.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_3.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_4.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_5.jpg', '//game.gtimg.cn/images/yw/web201905/pc/skill/sh_skill_6.jpg']
    },
    
];