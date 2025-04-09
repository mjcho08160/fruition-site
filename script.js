const MY_DOMAIN = 'ksacsm.org';  // 원하는 도메인
const MY_NOTION_PAGE = 'www.notion.so/Korean-Society-at-American-College-of-Sports-Medicine-1d085ec0d66a80c999afd8e58153ba00';  // Notion 페이지 끝부분

const myNotionLink = `https://quilt-vulture-ac2.notion.site/${MY_NOTION_PAGE}?pvs=4`;

window.location.replace(`https://${MY_DOMAIN}/?url=${myNotionLink}`);
