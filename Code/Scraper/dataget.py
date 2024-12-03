from bs4 import BeautifulSoup
import requests
import re
import linkget
import pandas
import sys, os

df_init = {"year" : [1945], "Name" : ["Sozialistische Partei Österreich"], "Abbr" : ["SPö"] , "Votes" : [120], "Percent" : [30], "Mandates" : [19]}
df = pandas.DataFrame(data=df_init)

def process_data(url):

    print(url)
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")

    content = []

    for tr in soup.find("tbody").find_all("tr"):

        td_list = []

        for td in tr.find_all(["td"]):

            if td.name == "td":
                td_list.append(td.text)

        if td_list:
            content.append(td_list)

    content_cleaned = [i for i in content if i != ["",""]]
    content_cleaned = [[i for i in l if i] for l in content_cleaned]

    print(content_cleaned)

    for t in content_cleaned:

        df.loc[len(df)] = [re.findall((r"\d{4}"), url), t[0],t[1],int(re.sub("\.|,", "", t[2])), float(t[3].replace(",",".")), t[4]]


for link in linkget.get_all_links():
    try:
        process_data(link)
    except Exception as ex:
        print(f"invalid formatting on {link} moving on")
        print(f"Full Exception: {ex}")

print(df)

csv_filename = input("Enter file name: ")
df.to_csv(os.path.join(sys.path[0], "csv", f"{csv_filename}.csv"), header=True)


