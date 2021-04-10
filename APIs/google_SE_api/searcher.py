from apiclient.discovery import build
import os
from dotenv import load_dotenv
load_dotenv()
def search(string):
    resource = build("customsearch", 'v1', developerKey="AIzaSyC34IB3XJ4roIUcyHl7bDg2RTPTT78y3WQ").cse()
    result = resource.list(q=string, cx="dfdd2ab8d2f3e4022").execute()
    return result['items'][0]['link']


# if __name__ == "__main__":
#     print(search('targit 20'))