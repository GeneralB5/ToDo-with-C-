using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
namespace backendProScrum.Repos;
public class MongoDBRepository
{
    public IMongoDatabase _DB;
    /// guardo la DB.Collection, ver si se pueden usar en private o public
    public MongoDBRepository(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        _DB = client.GetDatabase(databaseName);
    }
}