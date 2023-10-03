package Service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		PrintWriter out = response.getWriter();
		String u = "", p = "";
		u = request.getParameter("email");
		p = request.getParameter("password");
		
		if(u.equals("peaceked309@gmail.com") && p.equals("root")) {
			out.println("<h1>Hello!! "+u+"<h1>");
		}else {
			response.sendRedirect("Forgetpassword.html");
		}
	}
}
