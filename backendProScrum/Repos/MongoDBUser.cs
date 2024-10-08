using System.Data.Common;
using backendProScrum.Models;
using MongoDB.Bson;
using MongoDB.Driver;
namespace backendProScrum.Repos;
public class User : IUser
{   
    internal MongoDBRepository _repository = new MongoDBRepository("mongodb://localhost:27017","CSharpToDo");
    private readonly IMongoCollection<Person> _collection;
    public User()
    {
        _collection = _repository._DB.GetCollection<Person>("People");
    }
    
    public async Task CreateAcount(Person person)
    {
        try
        {   
            await _collection.InsertOneAsync(person);    
        }
        catch (Exception ex)
        {
            throw new Exception("Ocurrió un error al crear la cuenta. Inténtalo de nuevo más tarde.", ex);
        }
        
    }

    public async Task DeleteAcount(string Email)
    {
        try
        {
         var filter = Builders<Person>.Filter.Eq(p=>p.Email , Email);
         await _collection.DeleteOneAsync(filter);   
        }
        catch (Exception ex)
        {
            throw new Exception("Ocurrió un error al Borrar la cuenta. Inténtalo de nuevo más tarde.", ex);
        }
    }

    public async Task<Person> GetAcountByEmail(string Email)
    {
        try
        {
            return await _collection.Find(p=>p.Email == Email).FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            throw new Exception("Ocurrió un error al obtener la cuenta. Inténtalo de nuevo más tarde.", ex);
        }
        
    }

    public Task UpdateAcount(Person person)
    {
        throw new NotImplementedException();
        //para despues que ni idea de ocmo hacerlo ahora equisde
    }
    public async Task pushNewToDo(ToDo obj,string Email)
    {   //testear porque ni idea si funciona
    try
    {
        BsonDocument bsonObj = obj.ToBsonDocument();
        var filter = Builders<Person>.Filter.Eq("email", Email);
        var updateDefinition = Builders<Person>.Update.Push("todo",bsonObj);
        await _collection.UpdateOneAsync(filter, updateDefinition);
    }
    catch (Exception ex)
        {
            throw new Exception("Ocurrió un error al obtener la cuenta. Inténtalo de nuevo más tarde.", ex);
        }
    }
    public async Task deleteToDo(string ID,string Email)
    {
        try
        {
        var filter = Builders<Person>.Filter.Eq("email", Email);
        var updateDefinition = Builders<Person>.Update.PullFilter("todo", Builders<BsonDocument>.Filter.Eq("ID",ID));
        await _collection.UpdateOneAsync(filter, updateDefinition);

        }
        catch (Exception ex)
        {
            throw new Exception("Ocurrió un error al obtener la cuenta. Inténtalo de nuevo más tarde.", ex);
        }
    }
}