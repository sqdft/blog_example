import type {
	AntiLeechConfig,
	ExpressiveCodeConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "sqdft Blog",
	subtitle: "分享技术与生活",
	description:
		"sqdft的个人博客，分享技术与生活",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 361, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://g.gtimg.cn/music/photo_new/T053XD01000ID6X30dg8kF.png", // 背景图片来源链接
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://g.gtimg.cn/music/photo_new/T053XD01000ID6X30dg8kF.png", // 使用远程图片作为背景
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// 使用你提供的远程图片作为网站图标
		{
			src: "https://g.gtimg.cn/music/photo_new/T053XD010017SNjl46uSEf.jpg",
		},
	],
	apps: [
		{
			name: "个人博客",
			url: "https://blog-example-b97.pages.dev",
			image: "/favicon/blog.webp",
			description: "我的个人博客网站",
			external: true,
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.Apps,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://g.gtimg.cn/music/photo_new/T053XD010017SNjl46uSEf.jpg", // 使用远程图片作为头像
	name: "sqdft",
	bio: ["分享技术与生活"],
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/sqdft",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

//图片回退
export const imageFallbackConfig: ImageFallbackConfig = {
	enable: false, // 禁用图床回退功能
	originalDomain: "img.micostar.cc", // 主力图床 (新项目)
	fallbackDomain: "image.cloudrunmax.top", // R2 备用图床 (旧项目)
};

export const umamiConfig: UmamiConfig = {
	enable: false, // 禁用别人的Umami统计
	baseUrl: "https://umami.micostar.cc",
	shareId: "X9ZZZ5l2xErS44Rc",
	timezone: "Asia/Shanghai",
};

// 防盗链/域名保护配置
export const antiLeechConfig: AntiLeechConfig = {
	enable: false, // 禁用防盗链功能
	officialSites: [{ url: "https://blog-example-b97.pages.dev", name: "主站" }],
	debug: false,
	warningTitle: "⚠️ 域名安全警告",
	warningMessage:
		"您可能正在访问非官方网站，存在安全风险！建议跳转到官方网站。",
};

export const googleAnalyticsConfig = {
	enable: false, // 使用不蒜子统计，禁用GA
	measurementId: "G-68S9RLWRP0",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
