from bs4 import BeautifulSoup, Comment
import csv


# Takes in CSV data, outputs html per person. 

with open('tools\input.csv', 'r') as file:

    reader_list = list(csv.reader(file))
    # skips first row
    for row in reader_list[1:]:
        name = row[1]
        role = row[2]
        class_year = row[3]
        description = row[4]
        email = row[5]
        linkedin = row[6]
        # image URL - row[7]
        image_name = row[8]

        # Open test.html for reading
        with open('tools\person-template.html') as html_file:
            soup = BeautifulSoup(html_file.read(), features='html.parser')
            
            # change name, role, class text
            soup.find("h5").string.replace_with(name)
            soup.find("div", {"class": "card-text"}).string.replace_with(role + ", " + class_year)
            soup.find("p").string.replace_with(description)

            # change mail and linkedin link
            soup.find("a", {"class": "mail"})['href'] = "mailto:" + email
            if (linkedin != ""):
                if not "https://" in linkedin:
                    linkedin = "https://" + linkedin
                soup.find("a", {"class": "linkedin"})['href'] = linkedin
            else:
                soup.find("a", {"class": "linkedin"}).decompose()
                
            # change image
            soup.find("img")['src'] = "images\\headshots\\" + image_name

            # add comments to beginning and end for delineation
            soup.insert(0, Comment(f' Team Member - {name} '))
            soup.append(Comment(f' End - {name} '))        
        

            
            unformatted_tag_list = []
            for i, tag in enumerate(soup.find_all(['h5', 'div'])):
                unformatted_tag_list.append(str(tag))
                tag.replace_with('{' + 'unformatted_tag_list[{0}]'.format(i) + '}')

            pretty_markup = soup.prettify().format(unformatted_tag_list=unformatted_tag_list)



        # Write new contents to test.html
        with open('tools\\generated\\' + name + '.html', mode='w') as new_html_file:
            new_html_file.write(pretty_markup)

