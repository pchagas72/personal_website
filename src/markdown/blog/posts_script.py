import json
from os import listdir
from os.path import isfile, join


class blog_writer:
    def __init__(self, posts_path, json_path):
        self.posts_path = posts_path
        self.json_path = json_path

    def posts_to_dict(self):
        posts = [
            p for p in sorted(listdir(self.posts_path)) if (
                isfile(join(self.posts_path, p
                            )))]
        posts_titles = []
        posts_dates = []
        posts_content = []
        posts_dict = {}

        for post in posts:
            with open(f'./posts/{post}', 'r', encoding='utf-8') as f:
                posts_titles.append(f.readlines()[2].replace('#', '').strip())
            with open(f'./posts/{post}', 'r', encoding='utf-8') as f:
                posts_dates.append(f.readlines()[3]
                                .replace('_', '')
                                .replace('#', '')
                                .strip())
            with open(f'./posts/{post}', 'r', encoding='utf-8') as f:
                posts_content.append(f.read())

        counter = 0
        for post in posts:
            posts_dict[post] = (posts_content[counter],
                                posts_titles[counter], 
                                posts_dates[counter])
            counter += 1
        return posts_dict

    def dump_posts_to_json(self) -> None:
        posts_dict = self.posts_to_dict()
        with open('./posts.json', 'w', encoding='utf-8') as f:
            json.dump(posts_dict, f)
        

if __name__ == '__main__':
    posts_path = './posts/'
    json_path = './posts.json'
    bw = blog_writer(posts_path, json_path)
    bw.dump_posts_to_json()
