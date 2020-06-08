// Enter here the user flows and custom policies for your B2C application
// To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
// To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview

const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_singnupsiginin1",
        forgotPassword: "b2c_1_reset"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://pwcacsftest.b2clogin.com/pwcacsftest.onmicrosoft.com/B2C_1_singnupsiginin1",
        },
        forgotPassword: {
            authority: "https://pwcacsftest.b2clogin.com/pwcacsftest.onmicrosoft.com/b2c_1_reset",
        },
    },
}