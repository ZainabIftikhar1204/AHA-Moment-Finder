import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
import scipy.stats as sp
import math
from sklearn import preprocessing
import statsmodels.api as sm
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression 
from sklearn.metrics import mean_squared_error
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import  accuracy_score

def testRegression(max, datafile):
    dataset = pd.read_csv("oregon.csv", delimiter=",")

    #dataset = dataset.drop("Date", axis=1)

    #dataset = dataset.drop("Time", axis=1)

    #dataset = dataset.groupby("User ID").mean()

    dataset = dataset.dropna()


    #dataset = dataset.sort_values("Event {0}".format(max))
    dataset = dataset.reset_index()
    

    X = dataset.iloc[:,[1,2]].values
    
    #X = X.transpose()
    #X=X.reshape(-1,1)
    #print(X)
    scale = MinMaxScaler()
    X=scale.fit_transform(X)

    

    #y = dataset["Duration"].values

    y = dataset.iloc[:,3].values
    #y=y.reshape(-1,1)
    

    

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
    #print(X_test)
    
    

    


    

    #regressor = RandomForestRegressor(n_estimators=1000, max_features=None)
    regressor = LinearRegression()

    regressor.fit(X_train, y_train.ravel())

    y_pred = regressor.predict(X_test)
    

    print(regressor.score(X_test, y_test))
    
    #print(accuracy_score(y_test, y_pred))

    #print(X_test)
    #opt = 1
    #prediction = 0
    '''for x in range(1,100):
        in_data = np.array([x])
             
        in_data = in_data.reshape(-1,1)
        
               
        #in_data = scale.transform(in_data)
        print(in_data)
        
        predicted_y = regressor.predict(in_data)
        print(predicted_y)
        
        if predicted_y > prediction:
            prediction = predicted_y[0]
            opt = x

    print(prediction)
    print(opt)'''
    print("Mean is "+str(np.mean(y)))
    print("RMSE: ",math.sqrt(mean_squared_error(y_test,y_pred))/int(np.mean(y)))

    '''plt.scatter(X, y, label="Event {0}".format(max))
    plt.xlabel("Event Occurences")
    plt.ylabel("Duration")
    plt.legend()
    plt.show()'''
    X2 = sm.add_constant(X)
    est = sm.OLS(y, X2)
    est2 = est.fit()
    print(est2.summary())
    





testRegression(1,"")
