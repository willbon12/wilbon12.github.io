import requests
import yaml

# Define the API URL
api_url = 'https://restcountries.com/v3.1/all'

try:
    # Fetch data from the API
    response = requests.get(api_url)
    data = response.json()

    # Extract country names and flag URLs
    countries = []
    for country in data:
        name = country['name']['common']
        flag = country['flags']['svg']
        country_yaml = "- name: '{}'\n  flag: '{}'".format(name, flag)
        countries.append(country_yaml)

    # Write the data to a YAML file
    with open('countries.yml', 'w') as file:
        file.write('\n'.join(countries))

    print(f"Data for {len(countries)} countries saved to countries.yml")

except Exception as e:
    print(f"An error occurred: {str(e)}")