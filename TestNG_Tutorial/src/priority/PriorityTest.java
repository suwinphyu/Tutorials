package priority;

import org.testng.annotations.Test;

public class PriorityTest {
  @Test(priority = 6)
  public void signOut() {
	  System.out.println("SignOut");
  }
  
  @Test(priority = 5)
  public void paymentHistory() {
	  System.out.println("View Payment History");
  }
 
  @Test(priority = 4) 
  public void makePayment() {
	  System.out.println("Make Payment Transaction");
  }
  
  @Test(priority = 3)
  public void addToCart() {
	  System.out.println("Add to Cart");
  } 
  
  @Test(priority = 2)
  public void searchDress() {
	  System.out.println("Search Product");
  }
 
  @Test(priority = 1)
  public void signIn() {
	  System.out.println("Sign In");
  }
  
}
