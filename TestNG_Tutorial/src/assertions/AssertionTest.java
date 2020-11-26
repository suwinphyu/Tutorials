package assertions;

import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;


public class AssertionTest {

  WebDriver driver;
   
  @Test 
  public void testPageNameVerification() {
	  String expectedTitle = "My Store";
      String originalTitle = driver.getTitle();
      Assert.assertEquals(originalTitle, expectedTitle);
      System.out.println("Check Web Title ");
  }
  
  @BeforeMethod
  public void setUp() {
	  System.setProperty("webdriver.chrome.driver", "E:\\TestNG\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver ();
		driver.manage().window().maximize();
		
		driver.get("http://automationpractice.com/index.php");
		System.out.println("1. Open Chrome & Application");
  }

  @AfterMethod
  public void tearDown() {
	  System.out.println("2. Close Chrome & Application");
		driver.quit();	
  }
  
}