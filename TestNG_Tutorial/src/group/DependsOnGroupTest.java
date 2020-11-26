package group;

import org.testng.annotations.Test;

public class DependsOnGroupTest {
	@Test (groups = "smoke")
	public void test1_smoke () 
	{
		System.out.println("test1_smoke");
	}
	
	@Test (groups = { "QA", "regression"} )
	public void test2_qa_regression ()
	{
		System.out.println("test2_qa_regression");
	}
	
	@Test (dependsOnGroups = "regression")
	public void test3 ()
	{
		System.out.println("test3_regression");
	}
	
}
