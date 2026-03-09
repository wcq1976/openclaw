# OpenClaw Workspace Backup

这是 OpenClaw 核心数据的自动备份仓库。

## 备份内容

- `AGENTS.md` - 根级行为规则
- `SOUL.md` - 小智的灵魂和定位
- `USER.md` - 关于超哥
- `IDENTITY.md` - 小智的身份
- `TOOLS.md` - 工具配置
- `HEARTBEAT.md` - 自愈检查
- `skills/` - 已安装的技能
- `.gitignore` - 排除敏感文件

## 排除内容

- token、secret、cookie
- node_modules
- 临时文件
- 运行时缓存

## 自动化

每日 cron 自动备份，commit 仅当文件变化时。

## 恢复

如需恢复，将文件从远端拉回即可：
```bash
git pull
```

---
*由小智自动生成 🦞*
