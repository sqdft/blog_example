# 📊 博客统计功能设置指南

## 🎯 功能说明

本博客集成了基于 Supabase 的文章统计功能，可以统计：
- 站点总浏览量和访客数
- 每篇文章的浏览量
- 真实访客数据（跨设备统计）

## 🔧 设置步骤

### 1. 注册 Supabase 账号
1. 访问 https://supabase.com
2. 注册并创建新项目

### 2. 创建数据表
在 Supabase 控制台的 Table Editor 中创建表：

**表名**: `article_views`

**字段设置**:
- `id`: 类型 `int8`, 主键, Identity
- `article_slug`: 类型 `text`, NOT NULL
- `article_title`: 类型 `text`
- `visitor_id`: 类型 `text`, NOT NULL  
- `created_at`: 类型 `timestamptz`, 默认值 `now()`

### 3. 设置权限
在 SQL Editor 中执行：

```sql
-- 启用行级安全
ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;

-- 创建策略
CREATE POLICY "Enable insert for anon users" ON article_views
    FOR INSERT TO anon WITH CHECK (true);
    
CREATE POLICY "Enable read for anon users" ON article_views
    FOR SELECT TO anon USING (true);
```

### 4. 获取配置信息
在项目设置 → API 中获取：
- Project URL
- anon public key

### 5. 配置环境变量
创建 `.env` 文件：
```bash
PUBLIC_SUPABASE_URL=你的项目URL
PUBLIC_SUPABASE_ANON_KEY=你的匿名密钥
```

### 6. 部署配置
部署到 Cloudflare Pages 时，在环境变量中添加：
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

## 🔒 安全说明

- 所有敏感信息通过环境变量管理
- `.env` 文件不会上传到代码仓库
- 使用 anon key，相对安全
- 数据库设置了适当的访问权限

## ✅ 验证功能

部署后访问博客：
- 文章列表显示浏览量
- 文章详情页显示统计数据
- 侧边栏显示站点总统计

## 🛠️ 故障排除

如果统计不显示：
1. 检查环境变量设置
2. 查看浏览器控制台错误
3. 验证 Supabase 表和权限设置
4. 确认网络连接正常

## 📝 注意事项

- 首次访问可能需要几秒钟加载统计数据
- 24小时内重复访问不会重复计数
- 统计数据保存在云端，不会丢失