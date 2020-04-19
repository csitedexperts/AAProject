import networkx as nx
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap as Basemap
from geopy.geocoders import Nominatim
import csv
geolocator = Nominatim(user_agent="geoapiExercises")


plt.figure(figsize = (10,9))

#m = Basemap(projection='merc', llcrnrlon=-190, llcrnrlat=25, urcrnrlon=-60, urcrnrlat=50, lat_ts=0, resolution='i', suppress_ticks=True)

m = Basemap(llcrnrlon=-160, llcrnrlat=-60,urcrnrlon=160,urcrnrlat=70,resolution='l',suppress_ticks=True)

#m = Basemap(projection='merc',llcrnrlat=-80,urcrnrlat=80,llcrnrlon=-180,urcrnrlon=180,lat_ts=20,resolution='i',suppress_ticks=True)
input_file=open( 'COVID19_Data_CSV.csv', "r")
reader = csv.reader(input_file, delimiter=',')

transmissions=[]
dats=[]
for line in reader:
    source = line[1].split(',')[0].lower().strip()
    destination = line[2].split(',')[0].lower().strip()
    transmissions.append((source,destination))
    date = line[3]
    dats.append(date)

#transmissions = [('Paris','London'),('Tehran','Atlanta')]
G=nx.DiGraph()
#G = nx.Graph()
pos={}
for count,tr in enumerate(transmissions):
	print(tr[0],tr[1])
	src = geolocator.geocode(tr[0])
	des = geolocator.geocode(tr[1])
	G.add_node(tr[0])
	G.add_node(tr[1])
	G.add_edge(tr[0],tr[1])
	pos[tr[0]]=(src.longitude, src.latitude)
	pos[tr[1]]=(des.longitude, des.latitude)
#lats=[37.96,42.82]
#lons=[-121.29,-73.95]
# convert lat and lon to map projection
#mx,my=m(lons,lats)

# The NetworkX part
# put map projection coordinates in pos dictionary

#G.add_edge('a','b')

#pos['a']=(mx[0],my[0])
#pos['b']=(mx[1],my[1])
# draw
nx.draw_networkx_nodes(G,pos,node_list = G.nodes(),node_color = 'r', alpha = 0.8, node_size = 30)
nx.draw_networkx_edges(G,pos, edge_color='y', alpha=0.8,arrows = True)
# Now draw the map
m.drawcountries(linewidth = 1.5)
m.drawstates(linewidth = 0.6)
m.bluemarble()
m.drawcoastlines(linewidth=1.5)
plt.tight_layout()
plt.show()
