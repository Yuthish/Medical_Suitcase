from apiclient.discovery import build
import os
from dotenv import load_dotenv
load_dotenv()
def search(string):
    resource = build("customsearch", 'v1', developerKey=os.getenv('API_KEY')).cse()
    result = resource.list(q=string, cx=os.getenv('cx')).execute()
    return result['items'][0]['link']


# if __name__ == "__main__":
#     print(search('targit 20'))