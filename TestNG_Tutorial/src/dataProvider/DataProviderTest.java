package dataProvider;

import org.testng.annotations.Test;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.DataProvider;

public class DataProviderTest {

  WebDriver driver;
  @Test(dataProvider = "dp_logInData")
  public void login(String email, String password) {
  	  System.setProperty("webdriver.chrome.driver", "E:\\TestNG\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver ();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php");
		
		driver.findElement(By.xpath("//div[@class='header_user_info']/a")).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("passwd")).sendKeys(password);
		driver.findElement(By.id("SubmitLogin")).click();
      
		String actualResult = driver.getTitle();
		String expectedResult = "My account - My Store";
		Assert.assertEquals(actualResult, expectedResult, "The Actual & Expected Results Match");
		
		driver.quit();
  }

  @DataProvider
  public Object[][] dp_logInData() {
	  Object [][]data = new Object [3][2];
	  
	  data[0][0] = "testimonial@yopmail.com";
	  data[0][1] = "test@123";
	
	  data[1][0] = "invalid@yopmail.com"; // invalid Credentials- it should be failed
	  data[1][1] = "password";
	  
	  data[2][0] = "testng@yopmail.com";
	  data[2][1] = "test@123";
	  
	  return data;
		  
  }
}
