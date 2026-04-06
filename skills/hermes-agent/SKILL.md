# Hermes Agent (NousResearch)

自我进化的 AI Agent，内置学习循环。能从经验中创建技能、使用中自我改进、跨会话记忆。

## 核心特性

- **自学习循环** - 任务后自动创建技能，持续改进
- **跨会话记忆** - FTS5 全文搜索 + LLM 摘要
- **多平台网关** - Telegram, Discord, Slack, WhatsApp, Signal
- **并行子智能体** - 加速复杂任务
- **定时自动化** - 自然语言配置 cron 任务

## 支持的模型提供商

- Nous Portal, OpenRouter (200+ 模型), z.ai/GLM
- Kimi/Moonshot, MiniMax, OpenAI
- 自定义端点

## 安装

```bash
# 一键安装
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 或克隆后手动安装
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent
./setup-hermes.sh
```

## 常用命令

```bash
hermes              # 启动交互式 CLI
hermes model        # 选择 LLM 提供商和模型
hermes tools        # 配置启用的工具
hermes gateway      # 启动消息网关
hermes setup        # 运行完整设置向导
hermes claw migrate # 从 OpenClaw 迁移
hermes update       # 更新到最新版本
hermes doctor       # 诊断问题
```

## OpenClaw 迁移

```bash
hermes claw migrate
```

## 可用技能 (skills/)

| 技能 | 说明 |
|------|------|
| autonomous-ai-agents | 自主 AI 智能体 |
| creative | 创意写作、灵感 |
| data-science | 数据分析、机器学习 |
| devops | 运维、部署、监控 |
| diagramming | 图表生成 |
| github | GitHub 操作 |
| mcp | 模型上下文协议 |
| media | 媒体处理 |
| mlops | 机器学习运维 |
| research | 深度研究 |
| software-development | 软件开发 |
| social-media | 社交媒体运营 |

## 文档

- 完整文档: https://hermes-agent.nousresearch.com/docs/
- Discord: https://discord.gg/NousResearch

## 重要提示

⚠️ 需要 Python 和 Node.js 环境
⚠️ 推荐 Linux/macOS/WSL2
⚠️ Windows 需要 WSL2
