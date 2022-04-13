# story map
## start
panned out view of all census tract with tracts coloered by heat vulnerability score, 
- popup with facts about % green spcae, distance to hospital
- then open to let user explore

## story 
- highlight ten census tract that are grouped together, to take you through 

## features
- get direction button? (scretch goal)
- 

## potential functions needed
- choropleth
  - quantiles
- summary statistics table
- drop down menu, with
  - first etc quantiles, 
- direction button?
- filter


## data types & layers
- **heat vulnerability index** - *layer 1*
  - polygon
- **social vulnerability & physical vulnerabiltiy** - *layers 2 & 3*
  - each datas that make these up, tooltip or popup
- **community resources as point data** - *additional layer*
  - point, all binned to thier type of resource, e.g. "med assistance location", "cooling centers". 
  - includes addresss and website
    - libraries
    - schools
      - pub midlle 
      - hs
      - college & universities
    - public pools
    - hospitals & urgent doc 
  - polygon
    - parks and green spaces (could be points by st_centroid)



## Tasks 
- skeleton of the page **bri**
- identify functions needed
- prep data **aidan**