import data from "mapping-data/user.json"

const MEDIUM_TOKEN = process.env.REACT_APP_MEDIUM_TOKEN

export const mediumEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${data.infos.usernameMedium}&api_key=${MEDIUM_TOKEN}`
