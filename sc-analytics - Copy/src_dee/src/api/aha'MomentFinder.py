import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
import scipy.stats as sp

#import regression
def ahaMoment():


    dataset = pd.read_csv("set 1.csv", delimiter=",")
    #dataset=dataset[dataset["Date"] > "2021-03-01"]

    dataset = dataset.drop("Date", axis=1)
    dataset = dataset.drop("Time", axis=1)
    #dataset = dataset.drop("User ID", axis=1)
    dataset = dataset.groupby("User ID").mean()
    

    dataset = dataset.reset_index()
    
    events = {}
    num_columns = len(dataset.columns)
    correlations= {}

    for x in range(1, num_columns - 1):
        dataset = dataset.sort_values("event {0}".format(x))
        duration = dataset["Duration"].values
        events["event_{0}".format(x)] = dataset["event {0}".format(x)].values
        plt.plot(events["event_{0}".format(x)], duration,  label="event {0}".format(x))
        corr, _ = sp.spearmanr(events["event_{0}".format(x)], duration)
        
        correlations["correlation_{0}".format(x)]=corr

    
    print(correlations)
    max=1
    for x in range(1, len(correlations)+1):
        if correlations["correlation_{0}".format(x)] >= correlations["correlation_{0}".format(max)]:
            max = x

    print(max)
    #testRegression(max, dataset)
    print(dataset)

    print(events)

    

    plt.xlabel("Event Occurences")
    plt.ylabel("Duration")
    plt.legend()
    plt.show()
ahaMoment()