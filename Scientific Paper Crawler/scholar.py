#https://github.com/csitedexperts/AAProject

import scholarly
import pickle
import time
import numpy as np

query = 'covid-19' #covid-19, coronavirus

search_query = scholarly.search_pubs_query(query)
#print(next(search_query))
results=[]
i=0
try:
	while 1 == 1:
		i += 1
		#print(i)
		results.append(next(search_query))
		time.sleep((10-5)*np.random.random()+5) #from 5 to 10 seconds
		if i % 10 == 0:
			print(i)
		if i >= 3000:
			break	
except StopIteration:
	pass

pickle.dump(results, open(query+'.pickle', 'wb'))


'''
rrr = pickle.load(open(query+'.pickle', 'rb'))
j=0
for result in rrr:
	#print(result.bib['title'],result.bib['url'])
	j = j + 1
print(j)
'''
