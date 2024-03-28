export type AmplifyDependentResourcesAttributes = {
  "api": {
    "movie": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "movieGQL": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "movie9a1f50e7": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "movieUserPoolGroupRole": "string"
    }
  },
  "custom": {
    "redisClusterV2": {
      "Ec2SecurityGroupID": "string",
      "PrivateSubnetID": "string",
      "RedisEndpoint": "string",
      "VPCID": "string"
    }
  },
  "function": {
    "apiAuthorizer": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "crudData": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "movie9a1f50e7PreTokenGeneration": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "moviepipLayer": {
      "Arn": "string"
    },
    "redisLambda": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}