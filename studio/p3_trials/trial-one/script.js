url = 'https://www.alphavantage.co/query?function=NATURAL_GAS&interval=monthly&apikey=USDKKT1P0CIPBF4Y'
r = requests.get(url)
data = r.json()

print(data)