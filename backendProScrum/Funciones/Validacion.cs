namespace backendProScrum.Funciones;
public class Validation
{
public bool ContainsNullProperties(object obj)
{
    return obj.GetType().GetProperties()
        .Any(prop => prop.GetValue(obj) == null);
}
}
