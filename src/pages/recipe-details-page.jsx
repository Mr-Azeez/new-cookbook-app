import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context";
import NavBar from "../components/nav-bar";
import { Heart, ArrowDown, Share } from "iconsax-react";
// import OpenAI from "openai";

export default function RecipeDetailsPage() {
  const { id, title } = useParams();
  const {
    recipeIngredients,
    setRecipeIngredients,
    nutritionData,
    setNutritionData,
    detailedSteps,
    setDetailedSteps,
  } = useContext(GlobalContext);

  const spoonacularApiKey = "4d7c682e693448de9a7b5a9092177bff";
  const recipeArray = [];
  for (let i = 0; i < recipeIngredients.length; i++) {
    recipeArray.push({
      recipeName: recipeIngredients[i].name,
      recipeAmount: recipeIngredients[i].amount,
      recipeUnit: recipeIngredients[i].unit,
    });
  }
  // console.log(recipeArray)

  async function getNutrition() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${spoonacularApiKey}`
    );
    const nutritionData = await response.json();
    // console.log(nutritionData);
    setRecipeIngredients(nutritionData.ingredients);
    setNutritionData(nutritionData.nutrients);
    // console.log(recipeIngredients);
  }

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  // const openai = new OpenAI();

  async function handleDetailedSteps(title) {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant" },
              {
                role: "user",
                content: `Give me the steps on how to prepare ${title}`,
              },
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        }
      );
      const data = await response.json();
      const steps = parseOpenAIResponse(data.choices[0].message.content);
      setDetailedSteps(steps);
    } catch (error) {
      console.error("Error generating steps:", error);
    }
  }

  useEffect(() => {
    getNutrition();
    handleDetailedSteps(title);
  }, []);

  const parseOpenAIResponse = (response) => {
    const steps = response.split("\n").filter((line) => line.match(/^\d+\./));
    return steps.map((step) => step.trim().replace(/^\d+\.\s*/, ""));
  };

  return (
    <div className="container">
      <NavBar />
      <div className="ingredients-page">
        <div>
          <div className="ingredients-image-container">
            <h1 className="food-name">{title}</h1>
            <img
              src={`https://img.spoonacular.com/recipes/${id}-556x370.jpg`}
              alt=""
            />
          </div>
          {detailedSteps ? (
            <ul className="ingredients-information">
              <h2>Instruction</h2>
              {detailedSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          ) : (
            <p>No recipe data available.</p>
          )}
        </div>
        <div className="more-action-plus-info">
          <div className="ingredients-more-action">
            <div>
              <Heart size="26" color="#222" className="ingredients-icon" />
              <p>Favorite</p>
            </div>
            <div>
              <ArrowDown size="26" color="#222" className="ingredients-icon" />
              <p>Download</p>
            </div>
            <div>
              <Share size="26" color="#222" className="ingredients-icon" />
              <p>Share</p>
            </div>
          </div>

          {recipeIngredients && recipeIngredients.length ? (
            <ul className="ingredients-information">
              <h2>Ingredients</h2>
              {recipeIngredients.map((recipeIngredient, index) => (
                <li key={index} className="list-of-ingredients">
                  <span>
                    {recipeIngredient.amount} {recipeIngredient.unit}{" "}
                    {recipeIngredient.name}
                  </span>
                  {/* <span>{recipeIngredient}</span> */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No Ingredients available</p>
          )}

          {nutritionData && nutritionData.length ? (
            <ul className="ingredients-information">
              <h2>Nutrition</h2>
              {nutritionData.map((nutrition, index) => (
                <li key={index} className="list-of-nutrition">
                  <span>{nutrition.name}:</span>
                  <span className="nutrition-unit">
                    {nutrition.amount} {nutrition.unit}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No nutrition data available at the moment</p>
          )}
        </div>
      </div>
    </div>
  );
}
{
  /* <img src={`https://img.spoonacular.com/ingredients_100x100/${recipeIngredient.image}`} /> */
}
