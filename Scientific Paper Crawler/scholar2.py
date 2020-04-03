import requests
import pickle
import csv

numofiter= 35
query = 'covid-19' #coronavirus (190), covid-19 (330)

for i in range(1, numofiter+1):
	params = {
	  'api_key': 'your key',
	  'q': query,
	  'search_type': 'scholar',
	  'time_period': 'custom',
	  'time_period_min': '10/01/2019',
	  'output': 'json',
	  'page': str(i)
	}
	# make the http GET request to Scale SERP
	api_result = requests.get('https://api.scaleserp.com/search', params)

	# print the JSON response from Scale SERP
	results=api_result.json()
	pickle.dump(results, open(query+str(i)+'.pickle', 'wb'))

outputFile = open('Scientific_papers_covid-19_1.csv', 'w', newline='', encoding='utf-8')
tsv_output = csv.writer(outputFile, delimiter='\t')
tsv_output.writerow(['id', 'title', 'link','snippet'])
j=0
for i in range(1, numofiter+1):
	rrr = pickle.load(open(query+str(i)+'.pickle', 'rb'))
	if 'scholar_results' in rrr:
		cc = rrr['scholar_results']
		for item in cc:
			j = j + 1
			tsv_output.writerow([str(j+190), item['title'], item['link'],item['snippet']])
			#print(item['title'],item['link'],item['snippet'])		
print(j)
outputFile.close()

