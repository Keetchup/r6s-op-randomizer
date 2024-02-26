from bs4 import BeautifulSoup
import requests
import json
import sys
import os

def readOperatorNames(file):
    with open(file, 'r') as openfile:
        return json.load(openfile) 

def readOperatorCard(op_card):
    operator = {}
    operator['name'] = op_card.span.text.strip()

    icon = op_card.find('img', attrs = {'class': 'oplist__card__icon'})
    operator['icon'] = icon['src']

    portrait = op_card.find('img', attrs = {'class': 'oplist__card__img'})
    operator['portrait'] = portrait['src']
    return operator

def filterOutOpGroup(group):
    return list(map(lambda name:
        next(filter(lambda op: str.lower(name) == str.lower(op['name']), operators_all))
    , group))


URL = 'https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/operators'
request = requests.get(URL)
bsoup = BeautifulSoup(request.content, 'html5lib')

pathname = os.path.dirname(sys.argv[0])
ATTACKER_NAMES = readOperatorNames(os.path.join(pathname, 'operators', 'attackers.json'))
DEFENDER_NAMES = readOperatorNames(os.path.join(pathname, 'operators', 'defenders.json'))

operators = {}
operators_all = []

op_cards = bsoup.find('div', attrs = {'class': 'oplist__cards__wrapper'})
for op_card in op_cards.findAll('a', attrs = {'class': 'oplist__card'}):
    operators_all.append(readOperatorCard(op_card))

attackers = filterOutOpGroup(ATTACKER_NAMES)
defenders = filterOutOpGroup(DEFENDER_NAMES)

operators['attackers'] = attackers
operators['defenders'] = defenders


outpath = sys.argv[1]
outfilepath = os.path.join(outpath, 'operators.json')

with open(outfilepath, 'w') as outfile:
    json.dump(operators, outfile, indent=4)