package dependency;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import utility.Highlighter;

public class DependencyTest {
WebDriver driver;
	
	@BeforeClass
	public void setUp () throws Exception
	{
		System.setProperty("webdriver.chrome.driver", "E:\\TestNG\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver ();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php");		
	}
	
  @Test
  public void signIn ()
  {
	  driver.findElement(By.xpath("//div[@class='header_user_info']/a")).click();
	  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

      WebElement emailAddress = driver.findElement(By.id("email"));
      Highlighter.highlightElement(driver, emailAddress);
      emailAddress.sendKeys("testimonial@yopmail.com");

      WebElement password = driver.findElement(By.id("passwd"));
      Highlighter.highlightElement(driver, password);
      password.sendKeys("test@123");

      WebElement buttonSignIn = driver.findElement(By.id("SubmitLogin"));
      Highlighter.highlightElement(driver, buttonSignIn);
      buttonSignIn.click();

  }

  @Test(dependsOnMethods = "signIn")
  public void searchProduct ()
  {
      WebElement menu = driver.findElement(By.xpath("//div[@id='block_top_menu']/ul/li/a[text()='Women']"));
      Highlighter.highlightElement(driver, menu);
      menu.click();

      WebElement searchBox = driver.findElement(By.id("search_query_top"));
      Highlighter.highlightElement(driver, searchBox);
      searchBox.sendKeys("Summer Dress");

      WebElement buttonSearch = driver.findElement(By.xpath("//*[@id='searchbox']/button"));
      Highlighter.highlightElement(driver, buttonSearch);
      buttonSearch.click();
      System.out.println("Verify that Search For product on top search bar works correctly");
  }

  @Test(dependsOnMethods = {"signIn","searchProduct"})
  public void pageNameVerification() {
	  //Assertion
	  String expectedTitle = "Search - My Store";
      String originalTitle = driver.getTitle();
      Assert.assertEquals(originalTitle, expectedTitle);
      System.out.println(originalTitle.toString());

  }
  @Test(dependsOnMethods = {"signIn","pageNameVerification"})
  public void signOut ()
  {
      WebElement linkSignOut = driver.findElement(By.className("logout"));
      Highlighter.highlightElement(driver, linkSignOut);
      linkSignOut.click();

      System.out.println("Sign Out Successfully");
  }
	
	@AfterClass
	public void tearDown () throws Exception
	{
		driver.quit();		
	}
}
