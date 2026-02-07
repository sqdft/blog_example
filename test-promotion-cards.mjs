import { getCollection } from 'astro:content';

const posts = await getCollection('posts');

console.log('\n=== 推广卡片配置检查 ===\n');

posts.forEach(post => {
  console.log(`文章: ${post.data.title}`);
  console.log(`Slug: ${post.slug}`);
  if (post.data.promotionCard) {
    console.log('✅ 有推广卡片:');
    console.log(`   标题: ${post.data.promotionCard.title}`);
    console.log(`   图片: ${post.data.promotionCard.image}`);
    console.log(`   链接: ${post.data.promotionCard.link}`);
  } else {
    console.log('❌ 无推广卡片');
  }
  console.log('---\n');
});
