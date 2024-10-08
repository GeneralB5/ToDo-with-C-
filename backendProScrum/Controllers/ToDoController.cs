using Microsoft.AspNetCore.Mvc;
using backendProScrum.Models;
using backendProScrum.Repos;
using Newtonsoft.Json;
namespace backendProScrum.Controllers;

[ApiController]
[Route("api/array/[controller]")]
public class ToDoController: ControllerBase
{   
    /// adquiere el ToDo=todo del ToDoController
    private IUser Collection = new User();
   
    [HttpPost("AddToList")]
    [ProducesResponseType(StatusCodes.Status200OK,Type = typeof(RequestModel))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
     public async Task<IActionResult> UpdateList([FromBody] RequestModel obj)
        {       
          try
             { 
                if(obj.Email == null||obj.obj == null) throw new Exception("Faltan argumentos para poder ejecutar accion");
                obj.obj.ID = Guid.NewGuid().ToString();
                await Collection.pushNewToDo(obj.obj,obj.Email);
                return Ok(obj);
             }
          catch (Exception ex)
             {   
                return BadRequest(new { message = ex.Message });
             }   
        }

   [HttpDelete("DeleteToDo/{id}")]
   [ProducesResponseType(StatusCodes.Status404NotFound)]
   public async Task<IActionResult> DeleteToDo(string id)
      {       
         try
            {  
               string? cookieValue = Request.Cookies["User"];
               if (cookieValue != null)
               {
                  Person user = JsonConvert.DeserializeObject<Person>(cookieValue);
                  if(user.Email == null||id == null) throw new Exception("Faltan argumentos para poder ejecutar accion");
                  await Collection.deleteToDo(id,user.Email);
                  return NoContent();
               }else
               {
                  throw new Exception("No se ha obtenido cookie");
               }

               
               
            }
         catch (Exception ex)
            {   
               return BadRequest(new { message = ex.Message });
            }   
      }
        
}