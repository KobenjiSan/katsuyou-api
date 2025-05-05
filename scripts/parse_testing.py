# NOTE: 1) using "Parse XML Files with Python - Basics in 10 Minutes" by Max Rohowsky on YouTube
# NOTE: 2) since I have never used python nor xml this file is for learning / testing 

import xml.etree.ElementTree as ET #Element Tree Module

# Parse XML into Element Tree
tree = ET.parse('scripts/JMdict_e')
root = tree.getroot()

# Root
print(root.tag) # Main root tag (ours is JMdict)
print(len(root)) # Number of entries (211,668)

# Access Root Child
# print(root[0].tag) # (entry)
# print(len(root[0]))

# Loop over Root Children
# for child in root:
#     print(child[0].tag)
#     print(child[0].text)

# Root Grandchildren
# print(root[0][0].tag) # ent_seq
# print(root[0][0].text) # 1000000

# Get an Attribute
#print(root.attrib) # (random ex : <data date="2022-10-10"> [will return {'date': '2022-10-10'}])

# Loop over a Tag
# for ent in root.iter('ent_seq'):
#     print(ent.text) #prints every entity sequence number

# Find Children with Tag
# print(len(root[0].findall('ent_seq')))
# print(root[0].findall('ent_seq')[0].text)

# for elm in root.findall('./entry'):
#     for kanji in elm.findall('./k_ele'):
#         print(kanji.text)

# Printing to a file since windows cmd prompt doesnt handle japanese words
# I could change the switch the code page but having a file seemed nicer
output_file = open('scripts/output.txt', 'w', encoding='utf-8')

# loops through each entry, finds the k_ele and then gets the keb (gets kanji)
# for elm in root.findall('./entry'):
#     for kanji in elm.findall('./k_ele'):
#         if kanji.find('./keb') is not None: # if keb is missing
#             output_file.write(kanji.find('./keb').text + '\n') # writes output to file

input = "遊ぶ"
inputH = "たべる"

# for elm in root.findall('./entry'):
#     kanji_elements = elm.findall('./k_ele')
#     reading_elements = elm.findall('./r_ele')
#     first_meaning_element = elm.find('./sense')

#     for kanji in kanji_elements:
#         keb = kanji.find('./keb')
#         if keb is not None:
#             if keb.text == input:
#                 output_file.write('Kanji: ' + keb.text + '\n')

#     for reading in reading_elements:
#         reb = reading.find('./reb')
#         if reb is not None:
#             if reb.text == inputH:
#                 output_file.write('Hiragana: ' + reb.text + '\n')
    
#     for meaning in first_meaning_element:
#         gloss = meaning.find('./gloss')
#         if gloss is not None:
#             output_file.write("Meaning: " + gloss.text + "\n")        

kanji_output = ""
hiragana_output = ""
meaning_output = ""
found = False

for elm in root.findall('./entry'):
    for kanji in elm.findall('./k_ele'):
        keb = kanji.find('./keb')
        if keb is not None:
            if keb.text == input:
                kanji_output = input
                output_file.write("Kanji: " + kanji_output + "\n")

                reading = elm.find('./r_ele')
                reb = reading.find('./reb')
                if reb is not None:
                    hiragana_output = reb.text
                    output_file.write("hiragana: " + hiragana_output + "\n")

                meaning = elm.find('./sense')
                for gloss in meaning.findall('./gloss'):
                    if gloss is not None:
                        meaning_output = gloss.text
                        output_file.write("meaning: " + meaning_output + "\n")

                found = True
                break    
    if found:
        break        




output_file.close() 