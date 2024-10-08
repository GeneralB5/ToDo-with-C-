using backendProScrum.Models;
using backendProScrum.Repos;
using backendProScrum.Funciones;
using BCryptNet = BCrypt.Net.BCrypt;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace backendProScrum.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserController:ControllerBase
{
private IUser Collection = new User();
private Validation Vali = new Validation();

[HttpPost("Register")]
[ProducesResponseType(StatusCodes.Status201Created,Type = typeof(string))]
[ProducesResponseType(StatusCodes.Status404NotFound)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public async Task<IActionResult> Register([FromBody] RegisterRequestModel request)
{
try
    {        
        if(Vali.ContainsNullProperties(request)) return BadRequest(new { message = "No puede contener argumentos de tipo 'Null'"});
        string HashedP = BCryptNet.HashPassword(request.Password);
        Person Send = new Person
        {
            Name = request.Name,
            Email = request.Email,
            Password = HashedP,
            ToDoList = new List<ToDo>()
        };

        var CkdAcount = await Collection.GetAcountByEmail(Send.Email);
        if(CkdAcount != null) return BadRequest(new {message = "Ya existe la cuenta con este email"});
    
        await Collection.CreateAcount(Send);
        return Created("Creado",true); 
    }
    catch (Exception ex)
    {   
        return BadRequest(new { message = ex.Message });
    }
}
[HttpPost("Login")]
[ProducesResponseType(StatusCodes.Status201Created,Type = typeof(string))]
[ProducesResponseType(StatusCodes.Status404NotFound)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public async Task<ActionResult<Person>> Login([FromBody] LoginModel UserTaken )
{
    try
    {   
        if(Vali.ContainsNullProperties(UserTaken)) return BadRequest(new { message = "No puede contener argumentos de tipo 'Null'"});
        var userReturn = await Collection.GetAcountByEmail(UserTaken.Email);
        if(userReturn==null) return NotFound();
        if(!BCryptNet.Verify(UserTaken.Password,userReturn.Password))return BadRequest(new {message="Contraseña incorrecta"});        
        
        Person user = new Person{Email=userReturn.Email,Name=userReturn.Name,ToDoList=userReturn.ToDoList};
        Person cookieUser = new Person{Email=userReturn.Email,Name=userReturn.Name};
        string userJson = JsonConvert.SerializeObject(cookieUser);

        Response.Cookies.Append("User", userJson, new CookieOptions
        {
            HttpOnly =true,
            ///desactivado por uso de localhost
            Secure = false,
            Expires = DateTime.Now.AddDays(1),
            SameSite= SameSiteMode.Lax
        });

        return user;           
    }
    catch (Exception ex)
    {
        return BadRequest(new { message = ex.Message });
    }

}
[HttpDelete("Delete")]
[ProducesResponseType(StatusCodes.Status204NoContent,Type = typeof(string))]
[ProducesResponseType(StatusCodes.Status404NotFound)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public async Task<ActionResult> DeleteAccount([FromBody] EmailModel request)
{   try
        {
            await Collection.DeleteAcount(request.Email);
            return Ok("Usuario Borrado");   
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
}
}