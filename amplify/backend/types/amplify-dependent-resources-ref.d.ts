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
      "VPCID": "string",
      "customredisClusterV2Ec2SecurityGroupID": "string",
      "customredisClusterV2PrivateSubnetID": "string",
      "customredisClusterV2RedisEndpoint": "string"
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