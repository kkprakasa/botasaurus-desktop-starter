import { playwright } from 'botasaurus/playwright';

const youtubeCommentsScraper = playwright<any>({
  reuseDriver: true,
  name: 'youtubeCommentsScraper',
  run: async ({ data, page }) => {
    // Navigate to the Link
    await page.goto(data['link']);

    // Wait for comments to load
    await page.waitForSelector('ytd-comment-thread-renderer');

    // Scroll down to load more comments
    await page.evaluate(async () => {
      const distance = 100;
      const delay = 100;
      while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
        document.scrollingElement.scrollBy(0, distance);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    });

    // Extract comments
    const comments = await page.$$eval('#content-text', (elements) =>
      elements.map((el) => el.textContent.trim())
    );

    // Return the data
    return {
      comments: comments,
    };
  },
});

youtubeCommentsScraper;
