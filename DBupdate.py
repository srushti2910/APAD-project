Class CheckHW:
    from  pymongo.mongo_client import MongoClient
    import urlpath
    connection_url = urlpath.geturl()
    
    def CheckOut(Name,qty):
        client = MongoClient(connection_url.url)
        mydb = client["HardwareSet"]   #Database Name
        mycol = mydb["HWinfo"]         #Collection Name

        myquery = {"Name":Name}
        mydoc = mycol.find(myquery)  

        #print(mydoc[0])
        limit = mydoc[0].get('Availability')

        if (qty < limit):               #if checked out quantity is less than current availability 
            new = limit - qty           #deduct qty items from current availabitlity 
                                                             
        else:
            new = 0
            print("Not enough item!")
        
        myquery = { "Name": Name }
        newvalues = { "$set": { "Availability": new } }
        mycol.update_one(myquery, newvalues)    
        client.close() 

    def CheckIn(Name,qty):
        client = MongoClient(connection_url.url)
        mydb = client["HardwareSet"]   #Database Name
        mycol = mydb["HWinfo"]         #Collection Name

        myquery = {"Name":Name}
        mydoc = mycol.find(myquery)  

        #print(mydoc[0])
        limit = mydoc[0].get('Availability')
        cap = mydoc[0].get('Capacity')

        if (qty + limit <= cap):               #if checked out quantity is less than current availability 
            new = qty + limit                                                      
        else:
            new = cap
            print("Over Capacity!")
        
        myquery = { "Name": Name }
        newvalues = { "$set": { "Availability": new } }
        mycol.update_one(myquery, newvalues)     
        client.close()
    