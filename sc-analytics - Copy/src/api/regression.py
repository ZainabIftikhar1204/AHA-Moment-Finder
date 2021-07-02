import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
import scipy.stats as sp
import math
import statsmodels.api as sm
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression 
from sklearn.metrics import mean_squared_error
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from sklearn.metrics import  accuracy_score

def testRegression(max, datafile):
    dataset = pd.read_csv("set 1.csv", delimiter=",")

    dataset = dataset.drop("Date", axis=1)

    dataset = dataset.drop("Time", axis=1)

    #dataset = dataset.groupby("User ID").mean()

    dataset = dataset.dropna()


    dataset = dataset.sort_values("event {0}".format(max))
    dataset = dataset.reset_index()
    

    X = dataset["event {0}".format(max)].values
    
    

    y = dataset["Duration"].values

    #y = dataset["cost"].values

    

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
    #print(X_test)
    X_train = X_train.reshape(-1,1)
    X_test = X_test.reshape(-1,1)
    y_train = y_train.reshape(-1,1)
    y_test = y_test.reshape(-1,1)

    sc = StandardScaler()

    X_train = sc.fit_transform(X_train)
    

    X_test = sc.transform(X_test)

    regressor = RandomForestRegressor()
    

    regressor.fit(X_train, y_train.ravel())

    y_pred = regressor.predict(X_test)

    print("R^2 in Random Forest:",regressor.score(X_test, y_test))
    print("RMSE: ",math.sqrt(mean_squared_error(y_test,y_pred)))
    #print(accuracy_score(y_test, y_pred))

    #print(X_test)
    opt = 1
    prediction = 0
    for x in range(1,100):
        in_data = np.array([x])
             
        in_data = in_data.reshape(-1,1)
        
               
        in_data = sc.transform(in_data)
        #print(in_data)
        
        predicted_y = regressor.predict(in_data)
        #print(predicted_y)
        
        if predicted_y > prediction:
            prediction = predicted_y[0]
            opt = x

    print("Maximized Prediction: ",prediction)
    print("Optimal:",opt)
    print("Mean is "+str(np.mean(y)))
    X2 = sm.add_constant(X)
    est = sm.OLS(y, X2)
    est2 = est.fit()
    print(est2.summary())

    plt.scatter(X, y, label="event {0}".format(max))
    plt.xlabel("Event Occurences")
    plt.ylabel("Cost")
    plt.legend()
    plt.show()
    





testRegression(2,"")







