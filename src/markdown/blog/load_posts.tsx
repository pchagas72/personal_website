import postsJson from './posts.json'

let posts_array: Array<any> = []

for (const key in postsJson) {
    if (postsJson.hasOwnProperty(key)) {
        // @ts-ignore
        let value = postsJson[key];
        posts_array.push([value[0], value[1], value[2]])
    }
}
console.log(posts_array)

export default posts_array.reverse()
