Class QueryHW:
    from  pymongo.mongo_client import MongoClient
    import urlpath
    connection_url = urlpath.geturl()

    def queryName():
        client = MongoClient(connection_url.url)
       
        Name_list = []
        mydb = client["HardwareSet"]   #Database Name
        mycol = mydb["HWinfo"]         #Collection Name

        myquery = {}
        mydoc = mycol.find(myquery)  
        for x in mydoc:                   #mydoc has a cursor datatype 
            Name_list.append(x.get('Name'))
        client.close()
        return Name_list          #return list of name
        
    def queryAvailability():
        client = MongoClient(connection_url.url)
        try:
            client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)
       
        Availability_list = []
        mydb = client["HardwareSet"]   #Database Name
        mycol = mydb["HWinfo"]         #Collection Name

        myquery = {}
        mydoc = mycol.find(myquery)  
        for x in mydoc:                   #mydoc has a cursor datatype 
            Availability_list.append(x.get('Availability'))
        client.close()
        return Availability_list          #return list of availability
        

    def queryCapacity():
        client = MongoClient(connection_url.url)
   
        Capacity_list = []
        mydb = client["HardwareSet"]   #Database Name
        mycol = mydb["HWinfo"]         #Collection Name

        myquery = {}
        mydoc = mycol.find(myquery)  
        for x in mydoc:                  #mydoc has a cursor datatype 
            Capacity_list.append(x.get('Capacity'))
        client.close()
        return Capacity_list          #return list of capacity
