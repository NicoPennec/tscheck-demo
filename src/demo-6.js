
import axios from "axios";
import * as cheerio from "cheerio";
import chalk from "chalk";

const url = "http://breizhcamp.org/";

const config = {
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
  }
};

axios
  .get(url, config)
  .then(({ data: body }) => cheerio.load(body))
  .then($ => {
    const title = $("title, h2")
      .map((i, e) => $(e).text())
      .toArray()
      .join(" ✨\n✨  ");

    console.log(`\n✨  ${chalk.blueBright(title)} ✨\n`);
  });
